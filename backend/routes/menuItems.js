// backend/routes/menuItems.js
const express = require("express");
const router = express.Router();
const MenuItem = require("../models/MenuItems");

// Get all menu items
router.get("/", async (req, res) => {
  try {
    const items = await MenuItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new menu item
router.post("/", async (req, res) => {
  const menuItem = new MenuItem(req.body);
  try {
    const newItem = await menuItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
