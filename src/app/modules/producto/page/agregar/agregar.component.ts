import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { switchMap } from 'rxjs';
import Swal from 'sweetalert2'

import {  Producto } from 'src/app/core/model/producto';
import { ProductoService } from '../../service/producto.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  categorias:string[] = ["electronics","jewelery","men's clothing","women's clothing"]

   
  producto:Producto = {
    'id':          0,
    'title':      '',
    'price':       0,
    'description': '',
    'category':undefined ,
    'image':       '',
    'rating': {

      count:0,
      rate:0
    }
  }
  constructor(private _ActivatedRoute:ActivatedRoute, private _productoService:ProductoService, private _router :Router){

  }

  ngOnInit(): void {
    // this.cargarcombo();
  
    if( !this._router.url.includes('editproducto') ) {
      return;
    }
    
    this._ActivatedRoute.params
     .pipe(
      switchMap(({id}) => this._productoService.getidproducto(id))
     ).subscribe(producto=> this.producto=producto);
    
  
   }

   salir(){
    this._router.navigate(['/home/producto/listproducto']);
   }

   Guardar(){

    if( this.producto.title!.trim().length === 0  ) {
      return;
    }
   
    if(this.producto.id){
      this._productoService.actualizarproducto(this.producto.id, this.producto).subscribe(
        { next: rep=>{
          console.log("respuesta del servidor",rep)
          Swal.fire("Exito",'Los Datos se Actualizao Corretamente','success')
          this._router.navigate(['/home/producto/listproducto']);
        },error:error=>{
    Swal.fire("Error",error,'error')
          
          console.log("Hubo un error!",error)
        }
      })
 
  
    }else{
   this._productoService.guardarproducto(this.producto).subscribe( { next :rep => {
    console.log("respuesta del servidor",rep)
          Swal.fire("Exito",'Los Datos se Registro Corretamente','success')
          this._router.navigate(['/home/producto/listproducto']);
   
   },
   error:error=>{
    Swal.fire("Error",error,'error')
          
          console.log("Hubo un error!",error)
        }
  
  }
   )
  
  }

}
  


}
