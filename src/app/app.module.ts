import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import Appcomponent = require("./app.component");
import Hero = Appcomponent.Hero;

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
