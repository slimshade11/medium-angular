import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';

import { environment } from 'src/environments/environment';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { EffectsModule } from '@ngrx/effects';

import { TopBarModule } from 'src/app/shared/modules/top-bar/top-bar.module';
import { AuthFacade } from 'src/app/auth/auth.facade';
import { AuthInterceptor } from 'src/app/shared/services/auth-interceptor.service';
import { AuthModule } from 'src/app/auth/auth.module';
import { GlobalFeedModule } from 'src/app/global-feed/global-feed.module';
import { YourFeedModule } from 'src/app/your-feed/your-feed.module';
import { TagFeedModule } from 'src/app/tag-feed/tag-feed.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.wanderingCubes,
      backdropBackgroundColour: 'rgba(0,0,0,0)',
      backdropBorderRadius: '4px',
      primaryColour: '#ddd',
      secondaryColour: '#ddd',
      tertiaryColour: '#ddd',
    }),
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
