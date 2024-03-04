import { NgModule } from '@angular/core';
import { LoginComponent } from './page/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthListComponent } from './page/auth-list/auth-list.component';
import { HomeComponent } from 'src/app/core/shared/home/home.component';
import { AuthAgregarComponent } from './page/auth-agregar/auth-agregar.component';




export const routes: Routes = [
  

 {
path:'login',
component: LoginComponent ,
 }
 ,{
 path:'auth',
 component: HomeComponent ,
 children: [
  { path: 'auth-list', component: AuthListComponent },
  { path: 'auth-create', component: AuthAgregarComponent },
  { path: 'auth-update/:id', component: AuthAgregarComponent },
  
]
},

{ path: '**', redirectTo: 'login' }



      
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
