import { randomUUID } from "node:crypto";
export class Task {
    _title;
    _description;
    id = randomUUID();
    _createdAt = new Date();
    _completedAt = null;
    _updatedAt = this._createdAt;
    constructor(_title, _description) {
        this._title = _title;
        this._description = _description;
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
    set completedAt(value) {
        this._completedAt = value;
    }
    get completedAt() {
        const dateOfCompletedAtProtected = new Date(this._completedAt);
        return dateOfCompletedAtProtected;
    }
    set updatedAt(value) {
        this._updatedAt = value;
    }
    get updatedAt() {
        const dateOfUpdatedAtProtected = new Date(this._updatedAt);
        return dateOfUpdatedAtProtected;
    }
}
