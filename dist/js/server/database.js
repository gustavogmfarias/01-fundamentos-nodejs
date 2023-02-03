import * as fs from "node:fs/promises";
const databasePath = new URL("../db.json", import.meta.url);
export class Database {
    database = {};
    constructor() {
        fs.readFile(databasePath, "utf8")
            .then((data) => {
            this.database = JSON.parse(data);
        })
            .catch(() => {
            this.persist();
        });
    }
    persist() {
        fs.writeFile(databasePath, JSON.stringify(this.database));
    }
    select(table, search) {
        let data = this.database[table] ?? [];
        if (search) {
            data = data.filter((row) => {
                return Object.entries(search).some(([key, value]) => {
                    return row[key].includes(value);
                });
            });
        }
        return data;
    }
    insert(table, data) {
        if (Array.isArray(this.database[table])) {
            this.database[table].push(data);
        }
        else {
            this.database[table] = [data];
        }
        this.persist();
        return data;
    }
    update(table, id, data) {
        const rowIndex = this.database[table].findIndex((row) => row.id === id);
        const arr = this.database[table].find((task) => task.id === id);
        if (rowIndex > -1) {
            this.database[table][rowIndex] = {
                id,
                _createdAt: arr._createdAt,
                _updatedAt: new Date(),
                _completedAt: arr._completedAt,
                ...data,
            };
            this.persist();
        }
    }
    markAsCompleted(table, id) {
        const rowIndex = this.database[table].findIndex((row) => row.id === id);
        const arr = this.database[table].find((task) => task.id === id);
        console.log(arr);
        if (rowIndex > -1) {
            this.database[table][rowIndex] = {
                id,
                _createdAt: arr._createdAt,
                _updatedAt: new Date(),
                _completedAt: new Date(),
                _title: arr._title,
                _description: arr._description,
            };
            this.persist();
        }
    }
    delete(table, id) {
        const rowIndex = this.database[table].findIndex((row) => row.id === id);
        if (rowIndex > -1) {
            this.database[table].splice(rowIndex, 1);
            this.persist();
        }
    }
}
