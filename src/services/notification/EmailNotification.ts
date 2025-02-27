import { INotification } from "./INotification";

export class EmailNotification implements INotification {
  sendNotification(): void {
    console.log("Send notification to user's email");
  }
}
