const Cart = require('../models/Cart');
const Product = require('../models/Product');

exports.getCart = async (req, res) => {
  try {
    let cart = await Cart.findOne({ user: req.user._id }).populate('items.product', 'name image price stock status');
    if (!cart) cart = { items: [], totalPrice: 0 };
    res.json({ success: true, cart });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.addToCart = async (req, res) => {
  try {
    const { productId, quantity = 1 } = req.body;
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ success: false, message: 'Product not found' });
    if (product.stock < quantity) return res.status(400).json({ success: false, message: 'Insufficient stock' });
    
    let cart = await Cart.findOne({ user: req.user._id });
    if (!cart) cart = new Cart({ user: req.user._id, items: [] });
    
    const itemIndex = cart.items.findIndex(i => i.product.toString() === productId);
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({ product: productId, quantity, price: product.price });
    }
    
    cart.totalPrice = cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    await cart.save();
    await cart.populate('items.product', 'name image price stock status');
    res.json({ success: true, cart });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.updateCartItem = async (req, res) => {
  try {
    const { quantity } = req.body;
    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart) return res.status(404).json({ success: false, message: 'Cart not found' });
    
    const item = cart.items.id(req.params.itemId);
    if (!item) return res.status(404).json({ success: false, message: 'Item not found in cart' });
    
    item.quantity = quantity;
    cart.totalPrice = cart.items.reduce((acc, i) => acc + i.price * i.quantity, 0);
    await cart.save();
    await cart.populate('items.product', 'name image price stock status');
    res.json({ success: true, cart });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.removeFromCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart) return res.status(404).json({ success: false, message: 'Cart not found' });
    
    cart.items = cart.items.filter(i => i._id.toString() !== req.params.itemId);
    cart.totalPrice = cart.items.reduce((acc, i) => acc + i.price * i.quantity, 0);
    await cart.save();
    res.json({ success: true, cart });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.clearCart = async (req, res) => {
  try {
    await Cart.findOneAndDelete({ user: req.user._id });
    res.json({ success: true, message: 'Cart cleared' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
