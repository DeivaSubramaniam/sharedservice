import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SiblingComponent } from './sibling/sibling.component';
import { DataService } from './shared/data.service';
import { Sibling1Component } from './sibling1/sibling1.component';


@NgModule({
  declarations: [
    AppComponent,
    SiblingComponent,
    Sibling1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
