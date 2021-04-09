import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http"
import { CrudRoutingModule } from './crud-routing.module';
import { LoginComponent } from './login/login.component';
import { PanelComponent } from './panel/panel.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [
    LoginComponent,
    PanelComponent,
    CreateComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    CrudRoutingModule,
    HttpClientModule,
    
  ]
})
export class CrudModule { }
