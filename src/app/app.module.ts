import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { EffectsModule } from '@ngrx/effects';
import { TopBarModule } from 'src/app/shared/modules/top-bar/top-bar.module';
import { PersistanceService } from 'src/app/shared/services/persistance.service';
import { AuthFacade } from 'src/app/auth/auth.facade';
import { AuthInterceptor } from 'src/app/shared/services/auth-interceptor.service';
import { authReducers } from 'src/app/auth/store/reducers';
import { feedReducers } from 'src/app/shared/modules/feed/store/reducers';
import { AuthModule } from 'src/app/auth/auth.module';
import { AuthService } from './auth/services/auth.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    StoreModule.forRoot({ auth: authReducers, feed: feedReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
    TopBarModule,
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
