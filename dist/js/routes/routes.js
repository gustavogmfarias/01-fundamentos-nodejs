import { Task } from "../models/Task.js";
import { Database } from "../server/database.js";
import { buildRoutePath } from "../utils/build-route-path.js";
const database = new Database();
export const routes = [
    {
        method: "GET",
        path: buildRoutePath("/tasks"),
        handler: (req, res) => {
            const { search } = req.query;
            const tasks = database.select("tasks", {
                title: search,
                description: search,
            });
            return res.end(JSON.stringify(tasks));
        },
    },
    {
        method: "POST",
        path: buildRoutePath("/tasks"),
        handler: (req, res) => {
            const { title, description } = req.body;
            const task = new Task(title, description);
            database.insert("tasks", task);
            return res.writeHead(201).end();
        },
    },
    {
        method: "PUT",
        path: buildRoutePath("/tasks/:id"),
        handler: (req, res) => {
            const { id } = req.params;
            const { title, description } = req.body;
            database.update("tasks", id, {
                _title: title,
                _description: description,
            });
            return res.writeHead(204).end();
        },
    },
    {
        method: "DELETE",
        path: buildRoutePath("/tasks/:id"),
        handler: (req, res) => {
            const { id } = req.params;
            database.delete("tasks", id);
            return res.writeHead(204).end();
        },
    },
    {
        method: "PATCH",
        path: buildRoutePath("/tasks/:id/complete"),
        handler: (req, res) => {
            const { id } = req.params;
            database.markAsCompleted("tasks", id);
            return res.writeHead(204).end();
        },
    },
];
