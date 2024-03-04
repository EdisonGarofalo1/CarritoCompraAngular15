import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './page/listar/listar.component';
import { AgregarComponent } from './page/agregar/agregar.component';
import { ProductoRoutingModule } from './producto-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListarComponent,
    AgregarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
