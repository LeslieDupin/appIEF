import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DataProvider } from '../providers/data/data'; 

import { ViewEvenementPage } from '../pages/view-evenement/view-evenement';
import { AddEvenementPage } from '../pages/add-evenement/add-evenement';
import { EvenementsProvider } from '../providers/evenements/evenements';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    ViewEvenementPage,
    AddEvenementPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    ViewEvenementPage,
    AddEvenementPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    EvenementsProvider
  ]
})
export class AppModule {}
