import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomInputComponent implements OnInit {
  @Input('inputType') inputType = 'text';
  @Input('inputPlaceholder') inputPlaceholder: string = '';
  @Input('inputId') inputId: string = '';
  @Input('inputIcon') iconPath: string = '';
  // @Input('inputReadonly') readonlyInput: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
