const todos = [];

const addTodo = (req, res) => {
    const { todo } = req.body;
    console.log(todo)
    if (!todo) {
        res.status(400).json({ error: "missing todo" });
    }
    todos.push(todo);
    res.status(200).json(todos);
};

const getTodos = (req, res) => {
    res.status(200).json(todos);
};

const getTodoAtIndex = (req, res) => {
    const { index } = req.param;
    if (index > todos.length)
        res.status(400).json({ error: "cannot get todo at this index" });
    res.status(200).json({ todo: todos[index] });
};

const updateTodoAtIndex = (req, res) => {
    const { todo } = req.query;
    const { index } = req.param;

    if (index > todos.length)
        res.status(400).json({ error: "Cannot get todo at this index" });
    else if (!todo)
        res.status(400).json({ error: "missing todo" });
    todos[index] = todo;
    res.status(200).json(todos);
};

const deleteAtIndex = (req, res) => {
    const { index } = req.param;
    if (index > todos.length || todos.length === 0)
        res.status(400).json({ error: "index is invalid" });
    todos.slice(index, 1);
    res.status(200).json({ message: "todo removed", data: todos });
};

module.exports = {
    addTodo,
    getTodos,
    getTodoAtIndex,
    updateTodoAtIndex,
    deleteAtIndex
};