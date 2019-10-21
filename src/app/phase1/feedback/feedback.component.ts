declare function require(path: string):any;

import { Component, OnInit } from '@angular/core';
import { NgModule } from "@angular/core";
import { customersUser } from 'src/app/shared/user.model';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@NgModule({
  imports :[],
  declarations:[],
  exports:[]
})

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  constructor(
    private router : Router,
    private service: UserService,
    private firestore : AngularFirestore
  ) { }

  userID : string;
  displayUser : customersUser;

  ngOnInit() {
    this.resetForm();
    this.userID = localStorage.getItem('userId');

    this.service.getDisplayData(this.userID).subscribe(user => {
      this.displayUser = user;
    });
  }

  resetForm(form?:NgForm){
    if(form != null)
      form.resetForm();
    this.service.feedbackData = {
      id : '',
      rating : null,
      usefulTest : null,
      priceTest : '',
      suggestTest : null,
      phase2Wilingness : null,
      source : '',
      comments : '',
    }
  }

  headerlogo= require("./logo.png")
  headerprofile = require("./profile.png")
  rating1 = require("./rating1.png")
  rating2 = require("./rating2.png")
  rating3 = require("./rating3.png")
  rating4 = require("./rating4.png")
  rating5 = require("./rating5.png")

  submitFeedback(form:NgForm, pageName:string){
    let data = form.value;
    data.id = this.userID;

    this.firestore.collection('phase1-feedback').add(data);
    this.resetForm();
    localStorage.clear();
    this.router.navigate([`${pageName}`]);
  }
}
