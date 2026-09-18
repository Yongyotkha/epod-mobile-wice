import { SelectOptionPageModule } from './select-option/select-option.module';
import { SuccessModelPageModule } from './success-model/success-model.module';
import { SignatureModelPageModule } from './signature-model/signature-model.module';
import { RepasswordModalPageModule } from './repassword-modal/repassword-modal.module';
import { OrderModelPageModule } from './order-model/order-model.module';
import { CompletejobQrscannerComponent } from './completejob-qrscanner/completejob-qrscanner.component';
import { GetjobQrscannerComponent } from './getjob-qrscanner/getjob-qrscanner.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import {
  HTTP_INTERCEPTORS, HttpClientModule,
} from '@angular/common/http';
import { HttpConfigInterceptor } from './httpConfig.interceptor';
import { HTTP } from '@ionic-native/http/ngx';
import { ActionSheet } from '@ionic-native/action-sheet/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { CalendarModule } from "ion2-calendar";
import { Calendar } from '@ionic-native/calendar/ngx';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { ImageModalPageModule } from './image-modal/image-modal.module';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { RemarkModalPageModule } from './remark-modal/remark-modal.module';
import { QRScanner } from "@ionic-native/qr-scanner/ngx";
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { DeliverModalPageModule } from './deliver-modal/deliver-modal.module';
import { AddDropPageModule } from './add-drop/add-drop.module';
import { AddOrderPageModule } from './add-order/add-order.module';
import { EditOrderPageModule } from './edit-order/edit-order.module';
import { File } from '@ionic-native/file/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


library.add(fas, far, fab);
@NgModule({
  declarations: [AppComponent, GetjobQrscannerComponent, CompletejobQrscannerComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    CalendarModule,
    ImageModalPageModule,
    RemarkModalPageModule,
    OrderModelPageModule,
    DeliverModalPageModule,
    AddDropPageModule,
    AddOrderPageModule,
    EditOrderPageModule,
    RepasswordModalPageModule,
    SignatureModelPageModule,
    SuccessModelPageModule,
    SelectOptionPageModule
  ],
  providers: [
    InAppBrowser,
    StatusBar,
    SplashScreen, HTTP,
    ActionSheet,
    Camera,
    PhotoViewer,
    QRScanner,
    AndroidPermissions,
    Geolocation,
    LocationAccuracy,
    FileTransfer, Calendar,
    Base64ToGallery,
    File,
    LocationAccuracy
    ,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: HttpConfigInterceptor,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
