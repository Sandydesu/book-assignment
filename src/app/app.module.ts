import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { CustomeMaterialModule } from './material-module';

import { AuthInterceptor } from '@common/interceptors/auth.interceptor';

import { AppComponent } from './app.component';
import { NavigationComponent } from '@common/components/navigation/navigation.component';
import { SpinnerComponent } from './common/components/spinner/spinner.component';

import { SpinnerService } from '@common/services/spinner.service';

@NgModule({
  declarations: [AppComponent, NavigationComponent, SpinnerComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    CustomeMaterialModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    SpinnerService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
