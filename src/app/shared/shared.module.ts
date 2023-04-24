import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendErrorsComponent } from './components/backend-errors/backend-errors.component';
import { RouterModule } from '@angular/router';
import { BannerComponent } from './components/banner/banner.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { LoadingComponent } from './components/loading/loading.component';
import { UtilsService } from './services/utils.service';
import { PaginationComponent } from './components/pagination/pagination.component';
import { TagListComponent } from './components/tagList/tagList.component';
import { IsLoggedInAuthGuardService } from './services/is-logged-in-auth-guard.service';



@NgModule({
  declarations: [
    BackendErrorsComponent,
    BannerComponent,
    ErrorMessageComponent,
    LoadingComponent,
    PaginationComponent,
    TagListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    BackendErrorsComponent,
    BannerComponent,
    ErrorMessageComponent,
    LoadingComponent,
    PaginationComponent,
    TagListComponent
  ],
  providers: [UtilsService, IsLoggedInAuthGuardService]
})
export class SharedModule { }
