import {Component, ViewEncapsulation, OnInit, OnChanges, DoCheck, Output} from "@angular/core";
import {TaskType} from "../../../models/models";

@Component({
  selector: "user-tasks",
  templateUrl: "./user-tasks.component.html",
  styleUrls: ["./user-tasks.component.scss"],
  encapsulation: ViewEncapsulation.None
})


export class UserTasksComponent implements OnInit {

  tasks: TaskType[] = [];
  deletedTasks: TaskType[] = [];
  completedTasks: TaskType[] = [];
  archivedTasks: TaskType[] = [];

  constructor() {
  }

  ngOnInit() {
    const savedTasks = localStorage.getItem("tasks");
    const deletedTasks = localStorage.getItem("deletedTasks");
    const finishedTasks = localStorage.getItem("completedTasks");
    const archivedTasks = localStorage.getItem("archivedTasks")

    if (savedTasks) {
      const JSONedSavedTasks = JSON.parse(savedTasks);
      this.tasks.push(...JSONedSavedTasks);
      if (deletedTasks) {
        const JSONedDeletedTasks = JSON.parse(deletedTasks) as TaskType[];
        this.deletedTasks.push(...JSONedDeletedTasks);
      } else
        console.log(`no deleted tasks`)

      if (finishedTasks) {
        const JSONedCompletedTasks = JSON.parse(finishedTasks) as TaskType[];
        this.completedTasks.push(...JSONedCompletedTasks);
      } else {
        console.log(`no completed tasks`)
      }

      if (archivedTasks) {
        const JSONedCompletedTasks = JSON.parse(archivedTasks) as TaskType[];
        this.archivedTasks.push(...JSONedCompletedTasks);
      } else {
        console.log(`no archived tasks`)
      }
    } else {
      console.log(`there's no tasks`)
    }
  }

  addTask(taskNameInput: HTMLInputElement, taskDateInput: HTMLInputElement, taskTime: HTMLInputElement) {
    this.tasks.push({
      taskName: taskNameInput.value,
      taskStatus: "",
      taskDate: taskDateInput.value,
      taskColor: "",
      taskEndTime: taskTime.value,
      // calculatingRemainingTime: () => ""
    })
    taskNameInput.value = '';
    taskDateInput.value = '';
    localStorage.setItem("tasks", JSON.stringify(this.tasks))
  }

  removeTask(taskName: string) {
    const deletingIndex = this.tasks.findIndex((el) => {
      return el.taskName === taskName;
    })
    const splicedItem = this.tasks.splice(deletingIndex, 1);
    localStorage.setItem("tasks", JSON.stringify(this.tasks));

    this.deletedTasks.push(splicedItem[0]);
    localStorage.setItem("deletedTasks", JSON.stringify(this.deletedTasks));
  }

  completeTask(taskName: string) {
    const completedIndex = this.tasks.findIndex((el) => {
      return el.taskName === taskName;
    })
    const splicedItem = this.tasks.splice(completedIndex, 1);
    localStorage.setItem("tasks", JSON.stringify(this.tasks));


    this.completedTasks.push(splicedItem[0]);
    localStorage.setItem("completedTasks", JSON.stringify(this.completedTasks));
  }

  archiveTask(taskName: string) {
    const archiveIndex = this.tasks.findIndex((el) => {
      return el.taskName === taskName;
    })
    const splicedItem = this.tasks.splice(archiveIndex, 1);
    localStorage.setItem("tasks", JSON.stringify(this.tasks));


    this.archivedTasks.push(splicedItem[0]);
    localStorage.setItem("archivedTask", JSON.stringify(this.archivedTasks));
  }

  pinTask(taskToPin: HTMLElement, taskName: string) {
    if (!taskToPin.classList.contains("pinned-task")) {
      taskToPin.classList.add("pinned-task");

      const taskToBePinned = this.tasks.findIndex((el) => {
        return el.taskName === taskName;
      })
      const splicedItem = this.tasks.splice(taskToBePinned, 1);
      this.tasks.unshift(splicedItem[0])
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    } else {
      taskToPin.classList.remove("pinned-task")
    }
  }

  searchingForTask(searchName: string) {
    /*    this.tasks.forEach((el) => {

        })*/

    const searchingForElement = () => {
      for (let tasksKey in this.tasks) {
        if (this.tasks[tasksKey].taskName.toLowerCase() === searchName.toLowerCase()) {
          window.alert(`This task is here, ${this.tasks[tasksKey].taskName + " and it's end time is " + this.tasks[tasksKey].taskEndTime}`)
          return this.tasks[tasksKey];
        }
      }
      window.alert("task not found");
      return;
    }

    searchingForElement();
  }

}
