import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { getFormValidationErrors } from 'src/app/shared/utilities/get-form-validation-errors';
import { UsersService } from '../../services/users.service';
import { mustMatch } from '../../validators/must-match';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  hide = true;
  constructor(private fb: FormBuilder, private usersService: UsersService) {}

  createRegisterFormGroup(): FormGroup {
    return this.fb.group(
      {
        email: ['', [Validators.required, Validators.maxLength(20)]],
        name: ['', [Validators.required, Validators.minLength(10)]],
        password: [''],
        passwordConfirmation: [''],
      },
      {
        validator: mustMatch('password', 'passwordConfirmation'),
      }
    );
  }

  onSubmit(): void {
    console.log('onsubmit');
    console.log(this.registerForm.value);
  }
  cancelForm(): void {
    console.log('cancelado');
    console.log(getFormValidationErrors(this.registerForm));
  }

  ngOnInit(): void {
    this.registerForm = this.createRegisterFormGroup();
  }
}
