const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3005;

// custom middleware
app.use(express.json())

// routes
const todoRoutes = require("./routes/todo.routes");

app.use("/todo", todoRoutes);

app.listen(PORT, () => {
    console.log('Server running on http://127.0.0.1:' + PORT);
})