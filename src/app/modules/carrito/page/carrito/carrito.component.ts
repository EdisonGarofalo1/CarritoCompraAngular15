import { Component } from '@angular/core';

import { Agregarcarrito } from 'src/app/core/model/producto';
import { CarritoService } from '../../service/carrito.service';
import { Carrito } from 'src/app/core/model/carrito';





@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',

})
export class CarritoComponent {
  carrito:Agregarcarrito[]=[];

 


  constructor(private _CarritoService:CarritoService ){
  

  }
  // obtenerFechaActual(): Date {
  //   return new Date();
  // }

  ngOnInit(): void {
  this.cargarproducto();

 
 }

 total_ventas(): number {
  return this.carrito.reduce((total, item) => total + item.cantidad*item.price, 0);
}
 cargarproducto(){

    this.carrito = JSON.parse( localStorage.getItem('listaProductos')! );
 }
 vaciarcarrito(){
  // localStorage.clear();
  localStorage.removeItem('listaProductos');
  this.carrito=[];

 }

 eliminarproducto( id: number|undefined){
   
     console.log("id:",id);
    let arregloproducto =JSON.parse(localStorage.getItem("listaProductos")!);

    console.log("los que trare:",arregloproducto);

    let index;
   for (let i=0; i < arregloproducto.length; i++ ){
 
       console.log("arreglo:",arregloproducto[i].id) // resultado string "jeje"
 
     if(arregloproducto[i].id === id){

     console.log("i",i);
    index=i;
   arregloproducto.splice(index,1);
 
    break;

}
}
// localStorage.clear();
localStorage.removeItem('listaProductos');
localStorage.setItem("listaProductos",JSON.stringify(arregloproducto)) 
this.cargarproducto();


 }

 GuaradaFactura(){

 
 console.log("garadar:",this.carrito);

//  const Carrito: Carrito = {
  // userId: this.carrito.id
  // title:item.title,
  // price: item.price,
  // cantidad:1

  // userId:   number;
  // date:    ;
  // products: Product[];
  // __v:      number;

}





}
