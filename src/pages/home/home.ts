
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EvenementsProvider } from './../../providers/evenements/evenements';
import { AddEvenementPage } from '../add-evenement/add-evenement';
import { ViewEvenementPage } from '../view-evenement/view-evenement';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  evenements: any;

  constructor(public navCtrl: NavController, public evenementsService: EvenementsProvider) {
    
  }

  ionViewDidLoad() {
    this.evenementsService.getEvenements().subscribe((evenements) => {
      this.evenements = evenements;
    });
  }

  viewEvenement(evenement) {
    this.navCtrl.push(ViewEvenementPage, {
      evenement: evenement
    })
  }

  pushAddEvenementPage(){
    this.navCtrl.push(AddEvenementPage);
  }
}
