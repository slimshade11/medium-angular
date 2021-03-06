import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { Routes, RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { TopBarModule } from '@shared/modules/top-bar/top-bar.module';
import { AuthFacade } from '@auth/auth.facade';
import { AuthInterceptor } from '@shared/services/auth-interceptor.service';
import { AuthModule } from '@auth/auth.module';
import { GlobalFeedModule } from '@global-feed/global-feed.module';
import { YourFeedModule } from '@your-feed/your-feed.module';
import { TagFeedModule } from '@tag-feed/tag-feed.module';
import { ArticleModule } from '@article/article.module';
import { CreateArticleModule } from '@create-article/create-article.module';
import { environment } from 'src/environments/environment';
import { AppComponent } from 'src/app/app.component';

const routes: Routes = [];
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AuthModule,
    StoreModule.forRoot({ router: routerReducer }),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
    TopBarModule,
    GlobalFeedModule,
    YourFeedModule,
    TagFeedModule,
    CreateArticleModule,
    ArticleModule,
  ],
  providers: [
    AuthFacade,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
