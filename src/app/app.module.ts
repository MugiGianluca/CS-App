import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Import HttpClient
import { HttpClientModule } from '@angular/common/http';
import {Proveedor1Service} from 'src/app/proveedor1.service';

// Models
import { IonicStorageModule } from '@ionic/storage';
//imports
import { File} from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { DocumentViewer  } from '@ionic-native/document-viewer/ngx';




@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
  ],
  providers: [

    StatusBar,
    SplashScreen,
    Proveedor1Service,

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    File,
    FileTransfer,
    DocumentViewer



  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
