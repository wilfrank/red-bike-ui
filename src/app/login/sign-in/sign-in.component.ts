import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../../../app/service';
import { SignModel } from '../../../assets/dto/signInModel';
import { passwordMatchValidator } from '../../../assets/validator/passwordMatchValidator';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  minPw = 8;
  formGroup: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(this.minPw),
    ]),
    password2: new FormControl('', [Validators.required]),
  });
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<SignInComponent>,
    readonly formBuilder: FormBuilder,
    readonly authService: UserService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group(
      {
        name: ['', [Validators.required]],
        email: ['', [Validators.email, Validators.required]],
        password: ['', [Validators.required, Validators.minLength(this.minPw)]],
        password2: ['', [Validators.required]],
      },
      { validator: passwordMatchValidator }
    );
  }

  submit = () => {
    if (this.formGroup.valid) {
      const userToCreate = { ...this.formGroup.value } as SignModel;
      this.authService.signIn(userToCreate).subscribe(() => {
        this.dialogRef.close();
      });
    }
  };

  /* Shorthands for form controls (used from within template) */
  get password() {
    return this.formGroup?.get('password');
  }
  get password2() {
    return this.formGroup?.get('password2');
  }

  /* Called on each input in either password field */
  onPasswordInput() {
    if (this.formGroup?.hasError('passwordMismatch'))
      this.password2?.setErrors([{ passwordMismatch: true }]);
    else this.password2?.setErrors(null);
  }
}
