import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface';
import { AuthService } from '../../services/auth.service';
import { loginAction } from '../../store/actions';
import { LoginRequestInterface } from '../../types/login-request.interface';
import { isSubmitingSelector, validationErrorsSelector } from '../../store/selectors';

@Component({
  selector: 'mc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup!: FormGroup;
  isSubmiting$ !: Observable<boolean>;
  backendErrors$ !: Observable<BackendErrorsInterface | null>;

  constructor(
    private _fb: FormBuilder,
    private _store: Store,
    private _registerServie: AuthService) { }

  ngOnInit(): void {
    this.initializeForms();
    this.initilizeValues();
  }

  initilizeValues(): void {
    this.isSubmiting$ = this._store.pipe(select(isSubmitingSelector));
    this.backendErrors$ = this._store.pipe(select(validationErrorsSelector))
  }

  initializeForms(): void {
    this.formGroup = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  onSubmit(): void {
    if (true || this.formGroup.valid) {
      let userData: LoginRequestInterface = { user: this.formGroup.value };
      this._store.dispatch(loginAction(userData));
    }
  }

}
