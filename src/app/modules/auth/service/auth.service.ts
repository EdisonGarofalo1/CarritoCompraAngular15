import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environments';
import { AuthResponse } from 'src/app/core/model/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
 

  constructor(private http:HttpClient ) { }

  
  login(username:string, password:string):Observable<AuthResponse>{

       const url  = `${ this.baseUrl }auth/login`;
    const body = { username, password };

    return this.http.post<AuthResponse>( url, body )
      .pipe(
        tap( resp => {
          if ( resp.token ) {
            console.log("lo que trea el longin",resp)
            localStorage.setItem('token', resp.token! );
          }
        }),
        map( resp => resp.token ),
        catchError( err => of(err.error.msg) )
      );
  
  }

  validarToken(): Observable<boolean> {

    if ( !localStorage.getItem('token') ) {
      return of(false);
    }else{
      return of(true);

    }

    // const url = `${ this.baseUrl }/respuesta/1`;
    // const headers = new HttpHeaders()
    //   .set('x-token', localStorage.getItem('token') || '' );    
    // return this.http.get<AuthResponse>( url, { headers } )
    //     .pipe(
    //       map( resp => {
    //         localStorage.setItem('token', resp.token! );
    //         this.usuario = {
    //           usuario: resp.name!,
    //           id: resp.id!,
    //           email: resp.email!
    //         }

    //         return resp.ok;
    //       }),
    //       catchError( err => of(false) )
    //     );

  }

}
