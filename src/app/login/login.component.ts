import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserDto } from '../../assets/dto';
import { UserService } from '../service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  @Output() submitEM = new EventEmitter();
  @Input() user?: UserDto;
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<LoginComponent>,
    readonly authService: UserService
  ) {}

  ngOnInit(): void {}
  submit = (): void => {
    if (this.form.valid) {
      const userToLogin = { ...this.form.value } as UserDto;
      this.authService
        .login(userToLogin?.email ?? '', userToLogin?.password ?? '')
        .subscribe(
          (res: UserDto | undefined) => {
            this.user = res;
            this.error = null;
            this.dialogRef.close(this.user);
          },
          (err) => {
            this.error = 'Login no valido';
          }
        );
    }
  };
  @Input() error: string | null = '';
}
