import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MakhdominProvider } from '../providers/makhdomin/makhdomin';
import { MakhdominServiceProvider } from '../providers/makhdomin-service/makhdomin-service';
import { MakhdoumDetailsPage } from '../pages/makhdoum-details/makhdoum-details';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MakhdoumDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MakhdoumDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MakhdominProvider,
    MakhdominServiceProvider
  ]
})
export class AppModule {}
