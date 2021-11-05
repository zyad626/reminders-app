import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  usernamePlaceholder = 'User Name';
  usernameType = 'text';
  usernameId = 'login_username';
  usernameIcon = "/assets/profile.svg";

  userPasswordPlaceholder = "User Password";
  userPasswordType = 'password';
  passwordId = "login_password";
  passwordIcon = '/assets/lock.svg'


  constructor() {
  }

  ngOnInit(): void {
  }

}
