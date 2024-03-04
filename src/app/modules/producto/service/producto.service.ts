import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Producto } from 'src/app/core/model/producto';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

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
  
  getproducto():Observable<Producto[]>{

    return this.http.get<Producto[]>(this.baseUrl +'products').pipe(
      catchError(this.handleError)
      );
  }

  getidproducto(id:number):Observable<Producto>{

    return this.http.get<Producto>(this.baseUrl +'products/'+ id )
  }

  guardarproducto(data:Producto):Observable<Producto>{

    return this.http.post<Producto>(this.baseUrl + 'products/' , data).pipe(
      catchError(this.handleError)
      );

  }

  actualizarproducto(id:number,data:Producto):Observable<Producto>{

    return  this.http.put<Producto>(this.baseUrl + 'products/'+ id, data).pipe(
      catchError(this.handleError)
      );


  }

  eliminar_producto(id:number):Observable<Producto>{


    return  this.http.delete<Producto>(this.baseUrl + 'products/'+ id).pipe(
      catchError(this.handleError)
      );


  }



}
