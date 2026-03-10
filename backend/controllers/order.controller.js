const Order = require('../models/Order');
const Cart = require('../models/Cart');
const Product = require('../models/Product');
const { sendPaymentSuccessAlert } = require('../services/telegram.service');

exports.createOrder = async (req, res) => {
  try {
    const { paymentMethod } = req.body;
    const cart = await Cart.findOne({ user: req.user._id }).populate('items.product');
    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ success: false, message: 'Cart is empty' });
    }
    
    const orderItems = cart.items.map(item => ({
      product: item.product._id,
      name: item.product.name,
      image: item.product.image,
      price: item.price,
      quantity: item.quantity
    }));
    
    const itemsPrice = cart.totalPrice;
    const taxPrice = parseFloat((0.1 * itemsPrice).toFixed(2));
    const totalPrice = itemsPrice + taxPrice;
    
    const order = await Order.create({ user: req.user._id, orderItems, paymentMethod, itemsPrice, taxPrice, totalPrice });
    
    for (const item of cart.items) {
      const result = await Product.findOneAndUpdate(
        { _id: item.product._id, stock: { $gte: item.quantity } },
        { $inc: { stock: -item.quantity } }
      );
      if (!result) {
        return res.status(400).json({ success: false, message: `Insufficient stock for product: ${item.product.name}` });
      }
    }
    
    await Cart.findOneAndDelete({ user: req.user._id });
    
    res.status(201).json({ success: true, order });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 }).populate('orderItems.product', 'name image');
    res.json({ success: true, orders });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('user', 'name email').populate('orderItems.product', 'name image');
    if (!order) return res.status(404).json({ success: false, message: 'Order not found' });
    if (order.user._id.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ success: false, message: 'Not authorized' });
    }
    res.json({ success: true, order });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.cancelOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ success: false, message: 'Order not found' });
    if (order.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ success: false, message: 'Not authorized' });
    }
    if (['delivered'].includes(order.status)) {
      return res.status(400).json({ success: false, message: 'Cannot cancel order in current status' });
    }
    order.status = 'cancelled';
    await order.save();
    
    for (const item of order.orderItems) {
      await Product.findByIdAndUpdate(item.product, { $inc: { stock: item.quantity } });
    }
    
    res.json({ success: true, order });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    let query = {};
    if (req.query.status) query.status = req.query.status;

    // Date range filter
    if (req.query.dateFrom || req.query.dateTo) {
      query.createdAt = {};
      if (req.query.dateFrom) query.createdAt.$gte = new Date(req.query.dateFrom);
      if (req.query.dateTo) {
        const dateTo = new Date(req.query.dateTo);
        dateTo.setHours(23, 59, 59, 999);
        query.createdAt.$lte = dateTo;
      }
    }

    // Search by customer name
    if (req.query.search) {
      const User = require('../models/User');
      const users = await User.find({ name: { $regex: req.query.search, $options: 'i' } }, '_id');
      query.user = { $in: users.map(u => u._id) };
    }

    const total = await Order.countDocuments(query);
    const orders = await Order.find(query).populate('user', 'name email').sort({ createdAt: -1 }).skip(skip).limit(limit);
    res.json({ success: true, orders, total, page, pages: Math.ceil(total / limit) });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) return res.status(404).json({ success: false, message: 'Order not found' });
    res.json({ success: true, message: 'Order deleted' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.updateOrderStatus = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
    if (!order) return res.status(404).json({ success: false, message: 'Order not found' });
    res.json({ success: true, order });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.payOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ success: false, message: 'Order not found' });
    if (order.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ success: false, message: 'Not authorized' });
    }
    if (order.status !== 'pending') {
      return res.status(400).json({ success: false, message: 'Order is not in pending state' });
    }
    order.status = 'paid';
    order.isPaid = true;
    order.paidAt = new Date();
    await order.save();

    const User = require('../models/User');
    const user = await User.findById(req.user._id, 'name email');
    sendPaymentSuccessAlert(order, user).catch((err) =>
      console.error('Telegram notification failed:', err.message)
    );

    res.json({ success: true, order });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
