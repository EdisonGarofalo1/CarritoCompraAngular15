import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './page/carrito/carrito.component';



const rutas: Routes = [
  {
    path: '',
  
    children: [
  
      { path: 'carrito', component: CarritoComponent },
      // { path: 'nuevproducto', component: AgregarComponent },
      // { path: 'editproducto/:id', component: AgregarComponent },
      { path: '**', redirectTo: 'listproducto' }
  
  
    ]
  } 
  
  ];
  
  @NgModule({
    declarations: [],
    imports: [
      RouterModule.forChild(rutas)
    ],
    exports: [
      RouterModule
    ]
  })
export class CarritoRoutingModule { }
