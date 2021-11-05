import {Component, ViewEncapsulation} from "@angular/core"
import {TaskType} from "../../../models/models";
import {min} from "rxjs/operators";

@Component({
  selector: "task-remainder",
  templateUrl: "./task-remainder.component.html",
  styleUrls: ["./task-remainder.component.scss"],
  encapsulation: ViewEncapsulation.None
})

export class TaskRemainderComponent {
  workingOnTasks: TaskType[] = [];

  constructor() {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      const JSONedSavedTasks = JSON.parse(savedTasks);
      this.workingOnTasks.push(...JSONedSavedTasks);
    } else {
      console.log(`there's no archived tasks`)
    }
  }

  triggerRemainder(taskDate: string, taskTime: string, viewingElement: HTMLSpanElement) {
    if (taskDate && taskTime) {
      const startingTaskTime = new Date(taskDate + " " + taskTime).getTime();
      if (typeof startingTaskTime === 'number') {
        const timerCalculator = setInterval(() => {
          let currentDate = new Date().getTime();
          let calculatingTime = startingTaskTime - currentDate;
          let days = Math.floor(calculatingTime / (1000 * 60 * 60 * 24));
          let hours = Math.floor((calculatingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          let minutes = Math.floor((calculatingTime % (1000 * 60 * 60)) / (1000 * 60));
          let seconds = Math.floor((calculatingTime % (1000 * 60)) / 1000);
          viewingElement.textContent = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
          if (calculatingTime < 0) {
            clearInterval(timerCalculator)
            viewingElement.textContent = "time finished"
          }
        }, 1000)
      }
      return;
    } else {
      viewingElement.textContent = "no date set"
      return;
    }
  }

}
