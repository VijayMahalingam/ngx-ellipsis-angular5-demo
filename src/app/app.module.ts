import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { EllipsisModule } from 'ngx-ellipsis';
import {ResizableModule} from 'angular-resizable-element';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EllipsisModule,
    ResizableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
