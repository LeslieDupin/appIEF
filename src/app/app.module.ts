import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TodosProvider } from '../providers/todos/todos';
import { DataProvider } from '../providers/data/data'; 

import { ViewPostPage } from '../pages/view-post/view-post';
import { AddPostPage } from '../pages/add-post/add-post';
import { PostsProvider } from '../providers/posts/posts';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ViewPostPage,
    AddPostPage
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
    ViewPostPage,
    AddPostPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TodosProvider,
    DataProvider,
    PostsProvider
  ]
})
export class AppModule {}
