import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { CustomeMaterialModule } from './material-module';
import { BookStoreModule } from '@store/index';

import { AuthInterceptor } from '@core/interceptors/auth.interceptor';

import { AppComponent } from './app.component';
import { NavigationComponent, SpinnerComponent } from '@core/components';

import { SpinnerService, BookService } from '@core/services';

@NgModule({
  declarations: [AppComponent, NavigationComponent, SpinnerComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    CustomeMaterialModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    BookStoreModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    SpinnerService,
    BookService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
