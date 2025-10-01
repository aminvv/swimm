import { Component, AfterViewInit, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SignUpPayload } from '../dto/signup-payload.interface';
import { AuthService } from '../service/Auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { createSignUpForm } from '../form-config/signup-form.config';
import { Router } from '@angular/router';
import { AlertService } from '../../alert/service/alert.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements AfterViewInit, OnInit {
  isSignUp = true;
  formValid = false;
  signupForm!: FormGroup;

  ;

  constructor(
    private alertService: AlertService,
    private fb: FormBuilder, private authService: AuthService, private router: Router) { }

ngOnInit() {
  this.signupForm = createSignUpForm(this.fb);

  this.signupForm.valueChanges.subscribe(() => {
    const pass = this.signupForm.get('password')?.value;
    const confirm = this.signupForm.get('confirmPassword')?.value;

    if (pass && confirm && pass !== confirm) {
      this.signupForm.get('confirmPassword')?.setErrors({ mismatch: true });
    } else {
      const errors = this.signupForm.get('confirmPassword')?.errors;
      if (errors) {
        delete errors['mismatch'];
        if (Object.keys(errors).length === 0) {
          this.signupForm.get('confirmPassword')?.setErrors(null);
        }
      }
    }
  });
}


  ngAfterViewInit() {
    this.checkForm();
    this.enableAutoDirection();
  }

  enableAutoDirection() {
    const inputFields = document.querySelectorAll<HTMLInputElement>('.input__field');
    inputFields.forEach(input => {
      input.addEventListener('input', () => {
        if (/^[\u0600-\u06FF]/.test(input.value)) {
          input.style.direction = 'rtl';
          input.style.textAlign = 'right';
        } else {
          input.style.direction = 'ltr';
          input.style.textAlign = 'left';
        }
      });
    });
  }

  toggleForm(event?: Event) {
    event?.preventDefault();
    this.isSignUp = !this.isSignUp;
    this.formValid = false;
    this.signupForm.reset();
    setTimeout(() => this.checkForm());
    setTimeout(() => this.enableAutoDirection());
  }

  checkForm() {
    const requiredInputs = Array.from(document.querySelectorAll<HTMLInputElement>('input[required]'));
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    const confirmInput = document.getElementById('confirm-password') as HTMLInputElement;

    const validate = () => {
      const allFilled = requiredInputs.every(input => input.value.trim() !== '');
      const passwordsMatch = this.isSignUp ? (passwordInput?.value === confirmInput?.value) : true;
      this.formValid = allFilled && passwordsMatch;
    };

    requiredInputs.forEach(input => input.addEventListener('input', validate));
    if (passwordInput) passwordInput.addEventListener('input', validate);
    if (confirmInput) confirmInput.addEventListener('input', validate);
  }

  submit() {
    if (this.signupForm.invalid) return;

    const payload: SignUpPayload = {
      firstName: this.signupForm.value.firstName,
      lastName: this.signupForm.value.lastName,
      username: this.signupForm.value.username,
      email: this.signupForm.value.email,
      password: this.signupForm.value.password,
    };

    this.authService.signup(payload).subscribe({
      next: () => {
        this.alertService.showAlert('success', 'ثبت نام با موفقیت انجام شد!');
        setTimeout(() => this.router.navigate(['/']), 1500);
      },
      error: (err: HttpErrorResponse) => {
        if (err.status === 409) {
          this.alertService.showAlert('error', 'این حساب کاربری قبلاً وجود دارد!');
        } else {
          this.alertService.showAlert('error', 'خطا در ثبت نام: ' + (err.error?.message || err.message));
        }
      }
    });
  }
}
