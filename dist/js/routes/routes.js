import { Task } from "../models/Task.js";
import { Database } from "../server/database.js";
import { buildRoutePath } from "../utils/build-route-path.js";
const database = new Database();
export const routes = [
    {
        method: "GET",
        path: buildRoutePath("/users"),
        handler: (req, res) => {
            const { search } = req.query;
            const users = database.select("users", {
                name: search,
                email: search,
            });
            return res.end(JSON.stringify(users));
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
        path: buildRoutePath("/users/:id"),
        handler: (req, res) => {
            const { id } = req.params;
            const { name, email } = req.body;
            database.update("users", id, {
                name,
                email,
            });
            return res.writeHead(204).end();
        },
    },
    {
        method: "DELETE",
        path: buildRoutePath("/users/:id"),
        handler: (req, res) => {
            const { id } = req.params;
            database.delete("users", id);
            return res.writeHead(204).end();
        },
    },
];
