import { randomUUID } from "node:crypto";
export class Task {
    id;
    _title;
    _description;
    _createdAt;
    _completedAt;
    _updatedAt;
    constructor(title, description, completedAt, updatedAt) {
        this.id = randomUUID();
        this._title = title;
        this._description = description;
        this._createdAt = new Date();
        this._completedAt = completedAt;
        this._updatedAt = updatedAt;
    }
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
    get createdAt() {
        const dateOfCreatedAtProtected = new Date(this._createdAt);
        return dateOfCreatedAtProtected;
    }
}
