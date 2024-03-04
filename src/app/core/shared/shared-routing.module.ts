import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarTokenGuard } from '../guards/auth.guard';



const routes: Routes = [

  
  { path:'carrito',
  loadChildren:()=> import("../../modules/carrito/carrito.module").then(m=> m.CarritoModule),
  canActivate:[ValidarTokenGuard],
  canLoad:[ValidarTokenGuard],

 },{
     path:'categoria',
     loadChildren:()=> import('../../modules/categoria/categoria.module').then(m=>m.CategoriaModule)
 },
 {
  path:'producto',
  loadChildren:()=> import('../../modules/producto/producto.module').then(m=>m.ProductoModule)
},
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SharedRoutingModule { }
