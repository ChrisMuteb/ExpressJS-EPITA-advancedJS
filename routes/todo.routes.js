const express = require('express');
const router = express.Router();

const todoServices = require("../services/todo.service");

router.get("/", todoServices.getTodos);
router.post("/", todoServices.addTodo);
router.get('/:id', todoServices.getTodoAtIndex);
router.put('/:id', todoServices.updateTodoAtIndex);
router.delete('/:id', todoServices.deleteAtIndex);

module.exports = router;