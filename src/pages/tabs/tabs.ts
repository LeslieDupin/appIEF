import { Component } from '@angular/core';

import { AddEvenementPage } from '../add-evenement/add-evenement';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AddEvenementPage;

  constructor() {

  }
}
