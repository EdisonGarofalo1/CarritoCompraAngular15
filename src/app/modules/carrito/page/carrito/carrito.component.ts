import { Component } from '@angular/core';
import { Agregarcarrito } from 'src/app/core/model/producto';





@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  carrito:Agregarcarrito[]=[];

  ngOnInit(): void {

 
   this.cargarproducto();


 }
 cargarproducto(){

    this.carrito = JSON.parse( localStorage.getItem('listaProductos')! );
 }
 vaciarcarrito(){
  localStorage.clear();
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
localStorage.clear();
localStorage.setItem("listaProductos",JSON.stringify(arregloproducto)) 
this.cargarproducto();


 }
 GuaradaFactura(){

 console.log("garadar:",this.carrito);
}
}
