import { randomUUID } from "node:crypto";

export class Task {
  public readonly id: string = randomUUID();
  private _createdAt: Date = new Date();
  private _completedAt: Date = null;
  private _updatedAt: Date = this._createdAt;

  constructor(private _title: string, private _description: string) {}

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
