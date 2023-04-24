import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { filter, map, Observable } from 'rxjs';
import { isLoggedInSelector } from 'src/app/auth-pages/store/selectors';

@Injectable()
export class IsLoggedInAuthGuardService implements CanActivate {

  constructor(private store: Store, private roter: Router) { }

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(isLoggedInSelector), 
      filter(value => value != null),
      map(value => {
      if (!value) {
        this.roter.navigateByUrl("/login")
        return false;
      }
      return true;
    }))
  }
}
