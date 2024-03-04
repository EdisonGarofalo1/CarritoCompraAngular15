import { NgModule } from '@angular/core';
import { LoginComponent } from './page/login/login.component';
import { RouterModule, Routes } from '@angular/router';




export const routes: Routes = [
  
  {
    
  path:'login',
  component:LoginComponent

},
  {
    path:'**',
    redirectTo:'login'
  }
      
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
