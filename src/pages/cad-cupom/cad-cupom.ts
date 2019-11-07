import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cad-cupom',
  templateUrl: 'cad-cupom.html',
})
export class CadCupomPage {

  constructor(
    // public http: HttpClient,
    public navCtrl: NavController,
    public navParams: NavParams
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadCupomPage');
  }

  executar(url){
    console.log(url);
  } 

}
