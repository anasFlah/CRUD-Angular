import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PanelComponent} from './panel/panel.component';
import {LoginComponent} from './login/login.component';
import {UpdateComponent} from './update/update.component';
import {CreateComponent} from "./create/create.component";
/// adding  components to router 
const routes: Routes = [
  {path:'crud', redirectTo:'crud/main',pathMatch:'full'},
  {path:'crud/login',component:LoginComponent},
  {path:'crud/panel',component:PanelComponent},
  {path:'crud/create',component:CreateComponent},
  {path:"crud/update",component:UpdateComponent},
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
