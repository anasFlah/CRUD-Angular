import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SigninModuleModule} from './signin-module/signin-module.module';
import { LoginSystemComponent } from './signin-module/login-system/login-system.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginSystemComponent,
  
    
  ],
  //adding modules into the imports array//
  imports: [
    BrowserModule,
    AppRoutingModule,
    SigninModuleModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
