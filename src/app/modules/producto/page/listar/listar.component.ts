import { Component } from '@angular/core';
import { Producto, Agregarcarrito } from 'src/app/core/model/producto';
import { ProductoService } from '../../service/producto.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
 
})
export class ListarComponent {
  listaproducto: Producto [] =[];
  logueado: boolean = false;
   constructor( private _productoServoices: ProductoService){
   }

   ngOnInit(): void {

    if (localStorage.getItem('token')) {
      this.logueado = true;
      
    }

      this.cargarproducto()
   }

   cargarproducto(){

    this._productoServoices.getProducto().subscribe( listaproducto=> {this.listaproducto=listaproducto;
      
      console.log("listaxxxx:",this.listaproducto);})
 }

 Guardarproducto( item: Producto){

    
  const iCarrito: Agregarcarrito = {
     id:item.id,
     title:item.title,
     price: item.price,
     cantidad:1
  
  }


  if(localStorage.getItem('listaProductos') === null){

     const carrito:Agregarcarrito[]=[];
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
           let itemc:Agregarcarrito= carritoStorageJson[i];
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
    let itemcarrito: Agregarcarrito = carritoStorageJson[index];
   let unidad= itemcarrito.cantidad!++;
   
    // itemcarrito.total=iCarrito.price * itemcarrito.cantidad!++;
    carritoStorageJson[index]=itemcarrito;
    localStorage.setItem('listaProductos', JSON.stringify(carritoStorageJson));

    }
      }
  
 
  }
}
