import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserDto } from '../../assets/dto';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  _user?: UserDto;
  @Input()
  set user(user: UserDto | undefined) {
    this._user = user;
  }
  get user(): UserDto | undefined {
    return this._user;
  }
  @Output() logOutEM = new EventEmitter();
  @Output() logInEM = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  logOut = () => {
    this.logOutEM.emit(true);
  };
  logIn = () => {
    this.logInEM.emit(true);
  };
}
