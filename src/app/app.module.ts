import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ProductComponent } from './app.productComponent';
import { AppComponent }  from './app.component';
import Appcomponent = require("./app.component");
import Hero = Appcomponent.Hero;

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [AppComponent, ProductComponent],
  bootstrap: [AppComponent, ProductComponent]
})
export class AppModule { }
