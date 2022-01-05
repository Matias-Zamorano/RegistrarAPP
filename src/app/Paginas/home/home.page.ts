import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // Declaro una variable para entregarle cualquier cosa 
  data:any; // permite cualquier valor  , para recibir parametros desde otras pages se necesita ocupar router nuevamente y activated router

  constructor(private router: Router , private  activerouter: ActivatedRoute) {
    this.activerouter.queryParams.subscribe(params=>{
      if (this.router.getCurrentNavigation().extras.state){
        console.log('usuario registrado'),
        this.data=this.router.getCurrentNavigation().extras.state.user;
      }
    })
  }

}
