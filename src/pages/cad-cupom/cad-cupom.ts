import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { HttpClient } from '@angular/common/http';

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
    // return this.http.get("gs://teste-c17e4.appspot.com/P_20191021_234623.jpg").toPromise()
    // .then(
    //   data => {
    //     return data['items'];
    //   }
    // ).catch(
    //   () => []
    // );
  } 

}
