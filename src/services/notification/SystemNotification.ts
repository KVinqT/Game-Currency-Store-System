import { INotification } from "./INotification";

export class SystemNotifiction implements INotification {
  sendNotification(): void {
    console.log("Send notifications to user inside a system");
  }
}
