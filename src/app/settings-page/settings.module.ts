import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SettingsComponent } from 'src/app/settings-page/components/settings/settings.component'
import { RouterModule, Routes } from '@angular/router'
import { StoreModule } from '@ngrx/store'
import { reducers } from 'src/app/settings-page/store/reducers'
import { ReactiveFormsModule } from '@angular/forms'
import { SharedModule } from '../shared/shared.module'
import { IsLoggedInAuthGuardService } from '../shared/services/is-logged-in-auth-guard.service'

const routes: Routes = [
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [IsLoggedInAuthGuardService]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('settings', reducers),
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [SettingsComponent]
})
export class SettingsModule { }
