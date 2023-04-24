import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateArticleModule } from './article-page-create/create-article.module';
import { ArticleModule } from './article-page-show/article.module';
import { AuthModule } from './auth-pages/auth.module';
import { AuthInterceptor } from './auth-pages/services/auth-interceptor.service';
import { PersistanceService } from './auth-pages/services/persistance.service';
import { FeedPageModule } from './feed-page/feed-page.module';
import { FeedTogglerModule } from './feed-toggler/feed-toggler.module';
import { PopularTagsModule } from './popular-tags/popular-tags.module';
import { TagFeedModule } from './tag-feed/tag-feed.module';
import { TopBarModule } from './top-bar/top-bar.module';
import { YourFeedModule } from './your-feed-page/your-feed.module';
import { SharedModule } from './shared/shared.module';
import { SettingsModule } from './settings-page/settings.module';
import { EditArticleModule } from './article-page-edit/editArticle.module';
import { Page404Module } from './page-404/page-404.module';
import { UserProfileModule } from './user-profile-page/user-profile.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AuthModule,
    TopBarModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    SharedModule,
    FeedPageModule,
    PopularTagsModule,
    FeedTogglerModule,
    YourFeedModule,
    TagFeedModule,
    EditArticleModule,
    CreateArticleModule,
    ArticleModule,
    SettingsModule,
    UserProfileModule,
    Page404Module
  ],
  exports: [],
  providers: [
    PersistanceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
