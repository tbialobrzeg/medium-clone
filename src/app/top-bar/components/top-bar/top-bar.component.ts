import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { currentUserSelector, isAnonymusSelector, isLoggedInSelector } from 'src/app/auth-pages/store/selectors';
import { CurrentUserInterface } from 'src/app/auth-pages/types/current-user.interface';

@Component({
  selector: 'mc-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  isLoggedIn$ !: Observable<boolean | null>
  isAnonymus$ !: Observable<boolean>
  currentUser$ !: Observable<CurrentUserInterface | null>

  constructor(private _store: Store) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this._store.pipe(select(isLoggedInSelector));
    this.isAnonymus$ = this._store.pipe(select(isAnonymusSelector));
    this.currentUser$ = this._store.pipe(select(currentUserSelector));
  }

}
