import { Component } from '@angular/core';
import { subscribeOn } from 'rxjs/operators';
import { CommonService } from './service-login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  id:any;
  password:any;
  email:any;
  constructor( private newService : CommonService,)
}
data ;
validatebtn='save';

ngOnInit(){
  this.newservice.GetUser().subscribe((data:any)=>{
    this.data = data

  })
}