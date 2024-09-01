const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// Handle creating a new order
router.post("/", async (req, res) => {
  const { items, status } = req.body; // Extract items and status from request body

  // Validate required fields
  if (!items || !Array.isArray(items)) {
    return res.status(400).json({ message: "Items array is required" });
  }

  try {
    const order = new Order({
      items, // List of item IDs
      status: status || "Pending", // Set status or default to 'Pending'
    });

    const newOrder = await order.save(); // Save new order to the database
    res.status(201).json(newOrder); // Respond with the created order
  } catch (err) {
    res.status(400).json({ message: err.message }); // Handle validation errors
  }
});

// Handle retrieving all orders
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().populate("items"); // Populate the 'items' field with full menu item details
    res.json(orders); // Respond with list of orders
  } catch (err) {
    res.status(500).json({ message: err.message }); // Handle server errors
  }
});

module.exports = router;
