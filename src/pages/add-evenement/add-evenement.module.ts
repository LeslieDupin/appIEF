import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddEvenementPage } from './add-evenement';

@NgModule({
  declarations: [
    AddEvenementPage,
  ],
  imports: [
    IonicPageModule.forChild(AddEvenementPage),
  ],
})
export class AddEvenementPageModule {}
