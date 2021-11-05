import {Component} from "@angular/core";
import {TaskType} from "../../../models/models";

@Component({
  selector: "finished-tasks",
  templateUrl: "./finished-tasks.component.html",
  styleUrls: ["./finished-tasks.component.scss"]
})

export class FinishedTasksComponent {
  completedTasks: TaskType[] = [];

  constructor() {
    const savedTasks = localStorage.getItem("completedTasks");
    if (savedTasks) {
      const JSONedSavedTasks = JSON.parse(savedTasks);
      this.completedTasks.push(...JSONedSavedTasks);
    } else {
      console.log(`there's no completed tasks`)
    }
  }

}
