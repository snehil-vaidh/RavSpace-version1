import { Component, OnInit } from '@angular/core';
declare function require(path: string):any;

import { NgModule } from "@angular/core";
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';
import { AngularFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations:[],
  imports:[],
  providers:[]
})


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor(
    private service : UserService,
    private firestore : AngularFirestore
  ){}
 
  ngOnInit(){
    this.resetForm()
}
  imagesrc1=require('./shapes1.png');
  imagesrc5=require('./map.png');
  logo = require("./logo.png");


  resetForm(form?:NgForm){
    if(form != null)
      form.resetForm();
    this.service.contactUsData = {
      id : '',
      firstName : '',
      lastName : '',
      Email : '',
      message : ''
    }
  }

  contactFormSubmit(form:NgForm){
    let data = form.value;
    console.log(data);

    this.firestore.collection("contact-us-form").add(data);

    this.resetForm();
  }

}
