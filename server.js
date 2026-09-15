const express = require("express");

const app = express();
const PORT = 3000;

const menu = [
    { id: 1, food: "Burger", price: 120 },
    { id: 2, food: "Spaghetti", price: 150 },
    { id: 3, food: "Fried Chicken", price: 180 },
    { id: 4, food: "French Fries", price: 80 }
];

// Display index.html
app.use(express.static(__dirname));

// Get all menu items
app.get("/api/menu", (req, res) => {
    res.json(menu);
});

// Get one menu item by ID
app.get("/api/menu/:id", (req, res) => {

    const id = Number(req.params.id);

    const item = menu.find(item =>
        item.id === id
    );

    if (!item) {
        return res.status(404).json({
            message: "Food not found"
        });
    }

    res.json(item);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});