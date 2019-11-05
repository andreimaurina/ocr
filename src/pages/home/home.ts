import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadCupomPage } from '../cad-cupom/cad-cupom';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController
    ) {
  }

  novoCupom(){
    this.navCtrl.push(CadCupomPage);
  }

}
