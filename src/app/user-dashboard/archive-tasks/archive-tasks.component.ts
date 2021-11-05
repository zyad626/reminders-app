import {Component, ViewEncapsulation} from "@angular/core";
import {TaskType} from "../../../models/models";

@Component({
  selector: "archive-tasks",
  templateUrl: "./archive-tasks.component.html",
  styleUrls: ["./archive-tasks.component.scss"],
  encapsulation: ViewEncapsulation.None
})

export class ArchiveTasksComponent {
  archivedTasks: TaskType[] = []

  constructor() {
    const savedTasks = localStorage.getItem("archivedTask");
    if (savedTasks) {
      const JSONedSavedTasks = JSON.parse(savedTasks);
      this.archivedTasks.push(...JSONedSavedTasks);
    } else {
      console.log(`there's no archived tasks`)
    }
  }

}
