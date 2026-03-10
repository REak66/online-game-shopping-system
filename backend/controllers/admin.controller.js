const User = require('../models/User');
const Product = require('../models/Product');
const Order = require('../models/Order');
const Category = require('../models/Category');

exports.getDashboardStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments({ role: 'customer' });
    const totalProducts = await Product.countDocuments();
    const totalOrders = await Order.countDocuments();
    const totalSalesResult = await Order.aggregate([
      { $match: { status: { $ne: 'cancelled' } } },
      { $group: { _id: null, total: { $sum: '$totalPrice' } } }
    ]);
    const totalSales = totalSalesResult[0]?.total || 0;
    
    const recentOrders = await Order.find().populate('user', 'name email').sort({ createdAt: -1 }).limit(10);
    
    const monthlySales = await Order.aggregate([
      { $match: { status: { $ne: 'cancelled' }, createdAt: { $gte: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000) } } },
      { $group: { _id: { year: { $year: '$createdAt' }, month: { $month: '$createdAt' } }, sales: { $sum: '$totalPrice' }, count: { $sum: 1 } } },
      { $sort: { '_id.year': 1, '_id.month': 1 } }
    ]);
    
    res.json({ success: true, stats: { totalUsers, totalProducts, totalOrders, totalSales, recentOrders, monthlySales } });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.json({ success: true, users });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });
    res.json({ success: true, user });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });
    res.json({ success: true, message: 'User deleted' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
