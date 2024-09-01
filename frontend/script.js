document.addEventListener("DOMContentLoaded", () => {
  // Sample menu items data
  const menuItems = [
    {
      name: "Margherita Pizza",
      category: "Pizza",
      price: 12,
      size: "Medium",
      id: "66d315f0d067cb5fb4e6696d", // Use actual ObjectId from the database
    },
    {
      name: "Pepperoni Pizza",
      category: "Pizza",
      price: 14,
      size: "Large",
      id: "66d324a7151d0d74266e1989",
    },
    {
      name: "Vegetable Sandwich",
      category: "Snacks",
      price: 8,
      size: "Small",
      id: "66d324b3151d0d74266e198b",
    },
    {
      name: "Chicken Caesar Salad",
      category: "Salad",
      price: 10,
      size: "Medium",
      id: "66d324c3151d0d74266e198d",
    },
    {
      name: "Beef Burger",
      category: "Snacks",
      price: 11,
      size: "Large",
      id: "66d324ce151d0d74266e198f",
    },
    {
      name: "Spaghetti Carbonara",
      category: "Pasta",
      price: 13,
      size: "Medium",
      id: "66d324d8151d0d74266e1991",
    },
    {
      name: "BBQ Chicken Wings",
      category: "Snacks",
      price: 9,
      size: "Medium",
      id: "66d324eb151d0d74266e1995",
    },
    {
      name: "Lemonade",
      category: "Beverages",
      price: 4,
      size: "Large",
      id: "66d324f3151d0d74266e1997",
    },
    {
      name: "Chocolate Cake",
      category: "Dessert",
      price: 6,
      size: "Small",
      id: "66d324fc151d0d74266e1999",
    },
    {
      name: "Greek Salad",
      category: "Salad",
      price: 11,
      size: "Large",
      id: "66d324e1151d0d74266e1993",
    },
  ];

  const menuContainer = document.getElementById("menu");

  menuItems.forEach((item) => {
    const menuItemDiv = document.createElement("div");
    menuItemDiv.className = "menu-item";
    menuItemDiv.innerHTML = `
              <h3>${item.name}</h3>
              <p>Category: ${item.category}</p>
              <p>Price: $${item.price}</p>
              <p>Size: ${item.size}</p>
              <button onclick="orderItem('${item.id}')">Order</button>
          `;
    menuContainer.appendChild(menuItemDiv);
  });
});

function orderItem(itemId) {
  fetch("http://localhost:5000/api/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      items: [itemId], // Ensure the payload matches the schema
      status: "Pending", // Add status if needed
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Order successful:", data);
      alert("Order placed successfully!");
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Failed to place order.");
    });
}
