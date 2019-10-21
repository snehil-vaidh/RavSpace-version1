import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from "@angular/forms";
import { ToastrModule } from "ngx-toastr";
import { MatDialogModule } from "@angular/material/dialog";


import { MatStepperModule } from '@angular/material/stepper';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';
import {MatNativeDateModule} from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireDatabaseModule } from "@angular/fire/database";


import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { UserService } from './shared/user.service';
import { LoginfailComponent } from './landing/loginfail/loginfail.component';
import { DropzoneDirective } from './dropzone.directive';
import { PopupComponent } from './landing/career/popup/popup.component';
import { Phase1PricingComponent } from './phase1/phase1-info/phase1-pricing/phase1-pricing.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginfailComponent,
    DropzoneDirective,
    PopupComponent,
    Phase1PricingComponent
  ],
  imports: [
    BrowserModule,FormlyBootstrapModule, CommonModule,
    AppRoutingModule, routingComponents,
    ReactiveFormsModule, MatDialogModule,
    MatNativeDateModule, MatStepperModule  ,HttpClientModule,
    BrowserAnimationsModule, 
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, AngularFireStorageModule, AngularFireDatabaseModule,
    ToastrModule.forRoot()
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
  entryComponents: [LoginfailComponent, PopupComponent, Phase1PricingComponent]
})
export class AppModule { }
