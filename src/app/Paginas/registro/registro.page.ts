import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {


  /*Genero user con usuario  y password */ 

  user={ // estudiante 
    usuario:"",
    password:""
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ingresar(){
    let navigationExtras:NavigationExtras={ // estan tomando los datos de la variable  y de esta manera mostrara los datos que se han registrado 
      state:{
        user:this.user
      }
    }
    //console.log("Estudiante ingresado --> "+ this.user.usuario )
    this.router.navigate(['../home'], navigationExtras); // al escribir pages no lo detecta por ello hay que escribir ..  ademas solo pasa los parametros 
  }

}
