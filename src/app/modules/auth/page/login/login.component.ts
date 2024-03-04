import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/model/user';
import { AuthService } from '../../service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _router:Router, private _AuthService:AuthService){


  }
  usuario:User={
    username: 'johnd',
    password: 'm38rmF$'
  }
  login(){
console.log(this.usuario.username,this.usuario.password);
     this._AuthService.login(this.usuario.username!,this.usuario.password!).subscribe(res =>{
   console.log("resp",res)
      if(res.token !==null){
        console.log("si ingfrea")
        this._router.navigateByUrl('/home');
        } else {
          Swal.fire('Error', res.token, 'error');
        }

     } )
    
  }
sin_login(){

  // this.router.navigateByUrl('/navbar');
}

}
