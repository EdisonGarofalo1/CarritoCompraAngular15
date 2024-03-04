import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './page/listar/listar.component';
import { AgregarComponent } from './page/agregar/agregar.component';



const rutas: Routes = [
  {
    path: '',
  
    children: [
  
      { path: 'listproducto', component: ListarComponent },
      { path: 'nuevproducto', component: AgregarComponent },
      { path: 'editproducto/:id', component: AgregarComponent },
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
export class ProductoRoutingModule { }
