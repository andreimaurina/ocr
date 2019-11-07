import { Injectable } from '@angular/core';
import firebase from "firebase";

@Injectable()
export class CupomProvider {

  constructor(
    ) {
  }

  listar(){
    return firebase.firestore().collection("cupons").get().then((querySnapshot) => {
      let cupons = [];
      querySnapshot.forEach((doc) => {
        cupons.push({
          id: doc.id,
          ticket: doc.data().ticket
        })
      });
      return cupons;
    });
  }

  adicionar(ticket){
    return firebase.firestore().collection("cupons").add({
      ticket: ticket
    });
  }

  remover(id){
    return firebase.firestore().collection("cupons").doc(id).delete();
  }


}
