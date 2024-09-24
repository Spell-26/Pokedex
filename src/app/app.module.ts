import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterOutlet} from "@angular/router";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";

@NgModule({ declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        RouterOutlet], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
