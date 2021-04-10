import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class CommonService {

    constructor(private http: HttpClient) { }

    saveUser(user) {
        return this.http.post('http://localhost:3000/SaveUser/', user).
        pipe(
            map((data: any) => {
              return data;
            }), catchError( error => {
              return throwError( 'Something went wrong!' );
            })
         )
    }

    GetUser() {
        return this.http.get('http://localhost:3000/getUser/').pipe(
            map((data: any) => {
                return data;
            }), catchError(error => {
                return throwError('get user failed');
            })
        )
    }

 deleteUser(id){   
    return this.http.post('http://localhost:3000/deleteUser/',{'id': id}).
    pipe(
        map((data: any) => {
          return data;
        }), catchError( error => {
          return throwError( 'delete failed' );
        })
     ) 
                          
  }  
  
}  