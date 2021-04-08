import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {LoginSystemComponent} from './login-system/login-system.component'
@NgModule({
  declarations: [LoginSystemComponent],
  imports: [
    CommonModule
  ],
  exports:[LoginSystemComponent]



})
export class SigninModuleModule { }
