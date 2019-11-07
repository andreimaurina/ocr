import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { CadCupomPage } from '../cad-cupom/cad-cupom';
import { CupomProvider } from '../../providers/cupom/cupom';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cupons=[];

  constructor(
    public navCtrl: NavController,
    public provedor: CupomProvider,
    public alertCtrl: AlertController
    ) {
  }
  
  ionViewDidLoad(){
    this.listar();
  }

  listar() {
    this.provedor.listar().then(
      data => {
        console.log(data);
        this.cupons = data;
      }
    )
  } 
 
  novoCupom(){
    this.navCtrl.push(CadCupomPage); // <!--------------------------------------
  }

  excluir(id) {
    this.provedor.remover(id).then(
      () => {
        this.listar();
      }
    );
  }

  adicionar() {
    const popup = this.alertCtrl.create({
      title: 'Ticket',
      inputs: [
        {
          name: 'ticket',
          placeholder: 'Ticket'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Gravar',
          handler: data => {
            this.provedor.adicionar(data.ticket).then(
              () => {
                this.listar();
              }
            );
          }
        }
      ]
    });
    popup.present();
  }
 
 
 

}
