import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Page404Component } from './components/page404/page404.component';


const routes = [
  {
    path: '**',
    component: Page404Component
  }
]

@NgModule({
  declarations: [
    Page404Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Page404Module { }
