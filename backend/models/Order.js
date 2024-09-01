const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MenuItem", // Reference to MenuItem model
      required: true,
    },
  ],
  status: {
    type: String,
    default: "Pending", // Default status of the order
  },
});

module.exports = mongoose.model("Order", orderSchema);
