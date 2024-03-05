import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Carrito } from 'src/app/core/model/carrito';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private baseUrl: string = environment.baseUrl;

  constructor( private http:HttpClient) { }

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

  realizarVentasPost(data:Carrito):Observable<Carrito>{

 return this.http.post<Carrito>(this.baseUrl + 'carts/',data).pipe(
  catchError(this.handleError)
  );
  }
  
}
