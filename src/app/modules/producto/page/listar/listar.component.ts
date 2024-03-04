import { Component } from '@angular/core';
import { Producto, carrito } from 'src/app/core/model/producto';
import { ProductoService } from '../../service/producto.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent {
  listaproducto: Producto [] =[];
   constructor( private _productoServoices: ProductoService){
   }

   ngOnInit(): void {

      this.cargarproducto()
   }

   cargarproducto(){

    this._productoServoices.getproducto().subscribe( listaproducto=> {this.listaproducto=listaproducto;
      
      console.log("listaxxxx:",this.listaproducto);})
 }

 Guardarproducto( item: Producto){
  const iCarrito: carrito = {
     "id":item.id,
     "category":item.category,
     "price": item.price,
     "cantidad":1
  }
  if(localStorage.getItem('listaProductos') === null){

     const carrito:carrito[]=[];
     carrito.push(iCarrito);
      localStorage.setItem('listaProductos', JSON.stringify(carrito));
      console.log("primero");
  }else
      {
        const carritoStorage = localStorage.getItem('listaProductos') as string;
        console.log("carritoStorage:",carritoStorage);
        const carritoStorageJson=JSON.parse(carritoStorage)
         console.log("carritoStorageJson",carritoStorageJson);
         console.log("lenght:",carritoStorageJson.length);
           let index = -1;
         for (let i= 0; i < carritoStorageJson.length; i++){
           let itemc:carrito= carritoStorageJson[i];
           if(iCarrito.id === itemc.id){
                 index = i;
                 console.log("si encontro");
                 break;
           }
         }
         if(index === -1){

           carritoStorageJson.push(iCarrito)
        localStorage.setItem('listaProductos', JSON.stringify(carritoStorageJson));
     } else {
    let itemcarrito: carrito = carritoStorageJson[index];
    itemcarrito.cantidad!++;
    carritoStorageJson[index]=itemcarrito;
    localStorage.setItem('listaProductos', JSON.stringify(carritoStorageJson));

    }
      }
  
 
  }
}
