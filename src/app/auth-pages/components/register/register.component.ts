import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface';

import { registerAction } from '../../store/actions';
import { isSubmitingSelector, validationErrorsSelector } from '../../store/selectors';
import { RegisterRequestInterface } from '../../types/register-request.interface';


@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formGroup!: FormGroup;
  isSubmiting$ !: Observable<boolean>;
  backendErrors$ !: Observable<BackendErrorsInterface | null>;

  constructor(
    private _fb: FormBuilder,
    private _store: Store
    ) { }

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
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  onSubmit(): void {
    if (true || this.formGroup.valid) {
      let userData: RegisterRequestInterface = { user: this.formGroup.value };
      this._store.dispatch(registerAction(userData));
    }
  }

}
