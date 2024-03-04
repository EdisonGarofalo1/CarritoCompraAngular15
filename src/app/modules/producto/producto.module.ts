import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './page/listar/listar.component';
import { AgregarComponent } from './page/agregar/agregar.component';
import { ProductoRoutingModule } from './producto-routing.module';



@NgModule({
  declarations: [
    ListarComponent,
    AgregarComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
