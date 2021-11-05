import {Component, ViewEncapsulation} from "@angular/core"
import {TaskType} from "../../../models/models";

@Component({
  selector: "deleted-tasks",
  templateUrl: "./deleted-tasks.component.html",
  styleUrls: ["./deleted-tasks.component.scss"],
  encapsulation: ViewEncapsulation.None
})

export class DeletedTasksComponent {
  deletedTasks: TaskType[] = [];

  constructor() {
    const savedTasks = localStorage.getItem("deletedTasks");
    if (savedTasks) {
      const JSONedSavedTasks = JSON.parse(savedTasks);
      this.deletedTasks.push(...JSONedSavedTasks);
    } else {
      console.log(`there's no deleted tasks`)
    }
  }

  removeSelected(deletingTasks: string) {
    const deletingIndex = this.deletedTasks.findIndex((el) => {
      return el.taskName === deletingTasks;
    })

    this.deletedTasks.splice(deletingIndex, 1);
    localStorage.setItem("deletedTasks", JSON.stringify(this.deletedTasks));
  }

}
