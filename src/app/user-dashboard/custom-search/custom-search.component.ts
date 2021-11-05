import {Component, EventEmitter, Input, Output, ViewEncapsulation} from "@angular/core";

@Component({
  selector: "custom-search",
  templateUrl: "./custom-search.component.html",
  styleUrls: ["./custom-search.component.scss"],
  encapsulation: ViewEncapsulation.None
})

export class CustomSearchComponent {
  @Input('searchType') searchPlaceholder: string = '';
  @Output("searchingValue") searchingValue = new EventEmitter<string>();

  constructor() {

  }

  searchingWork(searchingInput: HTMLInputElement) {
    this.searchingValue.emit(searchingInput.value)
    searchingInput.value = '';
  }

}
