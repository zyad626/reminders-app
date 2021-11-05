import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegistrationFormComponent implements OnInit {
  usernameInputPlaceholder = 'User Name';
  usernameInputType = 'text';
  usernameId = 'username';
  usernameIcon = '/assets/profile.svg';
  userPasswordType="password";
  userPasswordPlaceholder = "User Password";
  passwordId = 'password';
  passwordIcon = '/assets/lock.svg';

  constructor() { }

  ngOnInit(): void {
  }

}
