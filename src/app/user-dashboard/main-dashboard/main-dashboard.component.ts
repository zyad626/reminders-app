import {Component, ViewEncapsulation} from "@angular/core"
import {TaskType} from "../../../models/models";

@Component({
  selector: "main-dashboard",
  templateUrl: "./main-dashboard.component.html",
  styleUrls: ["./main-dashboard.component.scss"],
  encapsulation: ViewEncapsulation.None
})

export class MainDashboardComponent {
  todaysTasks: TaskType[] = [{
    taskName: "Task name",
    taskEndTime: "",
    taskDate: "",
    taskColor: "",
    taskStatus: ""
  }];

  completedTasks: number = 0;
  currentTasks: number = 0;
  archiveTasks: number = 0;

  calcTasks() {
    const currentTasks = localStorage.getItem("tasks");
    const completedTasks = localStorage.getItem("completedTasks");
    const archivedTasks = localStorage.getItem("archivedTask");
    const currentJSONed = [];
    const completedJSONed = [];
    const archivedJSONed = [];

    if (typeof currentTasks === "string") {
      currentJSONed.push(JSON.parse(currentTasks));
    }

    if (typeof completedTasks === "string") {
      completedJSONed.push(JSON.parse(completedTasks));
    }

    if (typeof archivedTasks === "string") {
      archivedJSONed.push(JSON.parse(archivedTasks));
    }


    this.currentTasks = Array.isArray(currentJSONed[0]) ? currentJSONed[0].length : 0;
    this.completedTasks =Array.isArray(completedJSONed[0]) ? completedJSONed[0].length : 0;
    this.archiveTasks =Array.isArray(archivedJSONed[0]) ? archivedJSONed[0].length : 0;

    // console.log(currentJSONed[0], completedJSONed[0], archivedJSONed[0])
    console.log(this.currentTasks, this.completedTasks, this.archiveTasks)
  }

}
