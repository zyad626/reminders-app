import {Component, EventEmitter, Input, Output, ViewEncapsulation} from "@angular/core";

@Component({
  selector: "nav-link",
  templateUrl: "./nav-link.component.html",
  styleUrls: ['./nav-link.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavLinkComponent {
  @Input('path') goingToLink: string = '';
  @Input('content') linkContent: string = '';
  @Input('iconPath') iconPath: string = '';

  @Output("currentActive") isActive = new EventEmitter<string>();

  constructor() {
  }

  onActivatePath(currentLink: HTMLAnchorElement) {
    if (currentLink.classList.contains("active")) {
      this.isActive.emit(this.linkContent);
    } else {
      this.isActive.emit("");
    }
  }
}
