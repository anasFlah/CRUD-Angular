import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
// import { subscribeOn } from 'rxjs/operators';
// import { CommonService } from './service-login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private http: HttpClient) {}
  title = 'frontend';
  id: any;
  password: any;
  email: any;
  //////////////////////////////////////////////////////////////////////////////////
  //capture user inputs
  getemail(e: string): void {
    this.email = e;
    console.log(this.email);
  }
  /*---------------------------------------------------------------------------- */
  getpassword(pass: string): void {
    this.password = pass;
    console.log(this.password);
  }

  /////////////////////////////////////////////////////////////////////////////////////
  ngOnInit() {}
  ///////////////////////////////////////////////////////////////////////////////////
  saveUser(): any {
    return this.http
      .post('http://localhost:3005/SaveUser/', {
        email: this.email,
        password: this.password,
      })
      .pipe(
        map((data: any) => {
          return data;
        }),
        catchError((error) => {
          return throwError('Something went wrong!');
        })
      );
  }
  ///////////////////////////////////////////////////////////////////////////////////
  getUser(): any {
    return this.http
      .post('http://localhost:3005/getUser/', {
        email: this.email,
        password: this.password,
      })
      .pipe(
        map((data: any) => {
          return data;
        }),
        catchError((error) => {
          return throwError('get user failed');
        })
      );
  }
  ///////////////////////////////////////////////////////////////////////////////
  deleteUser(id: string): any {
    return this.http.post('http://localhost:3005/deleteUser/', { id: id }).pipe(
      map((data: any) => {
        return data;
      }),
      catchError((error) => {
        return throwError('delete failed');
      })
    );
  }

  //////////////////////////////////////////////////////////////////////////////
}
