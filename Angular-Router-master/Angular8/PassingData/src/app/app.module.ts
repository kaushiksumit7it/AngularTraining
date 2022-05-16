import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StaticComponent} from './static.component'


import { appRoutes } from './app.routes';
import { DynamicComponent } from './dynamic.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    AppComponent,StaticComponent,DynamicComponent,HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClient,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }