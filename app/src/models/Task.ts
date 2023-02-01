import { randomUUID } from "node:crypto";

export class Task {
  private readonly id: string;
  private _title: string;
  private _description: string;
  private _createdAt: Date;
  private _completedAt: Date;
  private _updatedAt: Date;

  constructor(title: string, description: string) {
    this.id = randomUUID();
    this._title = title;
    this._description = description;
    this._createdAt = new Date();
    this._completedAt = null;
    this._updatedAt = this._createdAt;
  }

  public get title(): string {
    return this._title;
  }

  public set title(value: string) {
    this._title = value;
  }

  public get description(): string {
    return this._description;
  }

  public set description(value: string) {
    this._description = value;
  }

  public get createdAt(): Date {
    const dateOfCreatedAtProtected = new Date(this._createdAt);
    return dateOfCreatedAtProtected;
  }

  public set completedAt(value: Date) {
    this._completedAt = value;
  }

  public get completedAt(): Date {
    const dateOfCompletedAtProtected = new Date(this._completedAt);
    return dateOfCompletedAtProtected;
  }

  public set updatedAt(value: Date) {
    this._updatedAt = value;
  }

  public get updatedAt(): Date {
    const dateOfUpdatedAtProtected = new Date(this._updatedAt);
    return dateOfUpdatedAtProtected;
  }
}
