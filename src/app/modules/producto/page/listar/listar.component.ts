import { Component } from '@angular/core';
import { Producto } from 'src/app/core/model/producto';
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
}
