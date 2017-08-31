import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EvenementsProvider } from '../../providers/evenements/evenements';

/**
 * Generated class for the AddEvenmentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-evenement',
  templateUrl: 'add-evenement.html',
})
export class AddEvenementPage {

  evenement: any = {
    _id: null,
    createur: 'Leslie Dupin',
    titre: '',
    localisation: '',
    dateDebut: '',
    description: '',
    dateCreation: '',
    dateModification: '',
    type: 'evenement'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public evenementService: EvenementsProvider) {
  }

  ionViewDidLoad() {
  }

  save() {
    this.evenement._id = this.evenement.titre.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'');
    this.evenement.dateCreation = new Date().toISOString();
    this.evenement.dateModification = new Date().toISOString();

    this.evenementService.addEvenement(this.evenement);

    this.navCtrl.pop();
  }

}
