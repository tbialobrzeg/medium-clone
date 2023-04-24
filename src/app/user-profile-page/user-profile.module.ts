import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { GetUserProfileEffect } from 'src/app/user-profile-page/store/effects';
import { NgModule } from '@angular/core';
import { reducers } from 'src/app/user-profile-page/store/reducers';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { UserProfileComponent } from 'src/app/user-profile-page/components/userProfile/userProfile.component';
import { UserProfileService } from './services/user-profile.service';


const routes = [
  {
    path: 'profiles/:slug',
    component: UserProfileComponent
  },
  {
    path: 'profiles/:slug/favorites',
    component: UserProfileComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([GetUserProfileEffect]),
    StoreModule.forFeature('userProfile', reducers)
  ],
  declarations: [UserProfileComponent],
  providers: [UserProfileService]
})
export class UserProfileModule { }
