import { Component } from '@angular/core';
import Swal from 'sweetalert2'
import { User } from 'src/app/core/model/user';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-auth-list',
  templateUrl: './auth-list.component.html',

})
export class AuthListComponent {

  listaUser: User [] =[];
  logueado: boolean = false;
   constructor( private _AuthService: AuthService){
   }

   ngOnInit(): void {

    if (localStorage.getItem('token')) {
      this.logueado = true;
      
      
    }else{

      return
    }

      this.cargarUsers()
   }
   cargarUsers(){

    this._AuthService.getUser().subscribe( resp=> {this.listaUser=resp;
      
      console.log("listaxxxx:",this.listaUser);})

   }

   deleteUser(id:number){
    
    this._AuthService.deleteUser(id).subscribe({next :resp=>{

      console.log("respuesta del servidor",resp)
      Swal.fire("Exito",'Se Elimino Existosamente','success')
      this.cargarUsers();
    

},
error:error=>{
Swal.fire("Error",error,'error')
      
      console.log("Hubo un error!",error)
    }
  
  
  })

   }

}
