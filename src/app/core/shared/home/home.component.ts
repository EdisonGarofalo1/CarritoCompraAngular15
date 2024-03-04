import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private _router:Router){

  }
  Salir(){

    localStorage.removeItem('token');
    // this.router.navigate(['/Login']);
    this._router.navigate(['/auth/login']);
  }

}