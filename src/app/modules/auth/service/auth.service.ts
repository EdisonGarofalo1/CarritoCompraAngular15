import { Injectable } from '@angular/core';
import { of, Observable, throwError } from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http'
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environments';
import { AuthResponse, User } from 'src/app/core/model/user';


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



  getUser():Observable<User[]>{

    return this.http.get<User[]>(this.baseUrl +'users').pipe(
      catchError(this.handleError)
      );
  }

  getidUser(id:number):Observable<User>{

    return this.http.get<User>(this.baseUrl +'users/'+ id )
  }

  createUser(data:User):Observable<User>{

    return this.http.post<User>(this.baseUrl + 'users/' , data).pipe(
      catchError(this.handleError)
      );

  }

  updateUser(id:number,data:User):Observable<User>{

    return  this.http.put<User>(this.baseUrl + 'users/'+ id, data).pipe(
      catchError(this.handleError)
      );


  }

  deleteUser(id:number):Observable<User>{


    return  this.http.delete<User>(this.baseUrl + 'users/'+ id).pipe(
      catchError(this.handleError)
      );
}



private handleError(error:HttpErrorResponse){

  if(error.error instanceof ErrorEvent){
    console.error('Ocurrió un error:',error.error.message)


  }else {

    console.error(`El backend devolvió el código ${error.status}` +
    
    ` body era: ${error.error}`);

        }
        return throwError ('Algo malo sucedio; Por favor, inténtelo de nuevo más tarde.'

        );
  
}
}