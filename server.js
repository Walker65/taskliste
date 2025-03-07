const express = require('express');
const app = express();
const port = 4000;


app.use(express.json());

app.get('/', (req, res) => {
    res.send({ "message": "Bienvenue sur API-Adam!" });
});

let tasks = [
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: true }
];

app.post("/tasks", (req, res) => {
    const { title, completed } = req.body;

    if (!title) {
        return res.status(400).json({ message: "Title is required" });
    }

    const newTask = { id: tasks.length + 1, title, completed: completed || false };
    tasks.push(newTask);

    res.status(201).json(newTask);
});

app.get("/tasks", (req, res) => {
    res.json(tasks);
});


app.get("/tasks/:id", (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));

    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    }

    res.json(task);
});


app.put("/tasks/:id", (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));

    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    }

    const { title, completed } = req.body;

    if (title) task.title = title;
    if (completed !== undefined) task.completed = completed;

    res.json(task);
});

app.delete("/tasks/:id", (req, res) => {
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));

    if (taskIndex === -1) {
        return res.status(404).json({ message: "Task not found" });
    }

    tasks.splice(taskIndex, 1);

    res.status(204).send();
});


app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});