// controllers/orderController.js

const Order = require("../models/Order");

// Handle creating a new order
const createOrder = async (req, res) => {
  try {
    const order = new Order({
      items: req.body.items,
      status: req.body.status || 'Pending',
    });

    const newOrder = await order.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Handle retrieving all orders
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("items");
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createOrder,
  getAllOrders,
};
