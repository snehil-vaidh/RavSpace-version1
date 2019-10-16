declare function require(path: string):any;

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { UserService } from 'src/app/shared/user.service';
import { DataService } from 'src/app/shared/data.service';
import { NgForm } from '@angular/forms';

@NgModule({
  declarations:[],
  imports:[],
  providers:[]
})


@Component({
  selector: 'app-profile-education-choice',
  templateUrl: './profile-education-choice.component.html',
  styleUrls: ['./profile-education-choice.component.css']
})
export class ProfileEducationChoiceComponent implements OnInit {

  constructor(
    private router: Router,
    private firestore : AngularFirestore,
    private service : UserService
    ) { }

  ngOnInit() {
    this.resetForm();
    this.userID = localStorage.getItem('userId')
  }

  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }

  background_1 = require("./background-1.png")
  background_2 = require("./background-2.png")
  background_5 = require("./background-5.png")
  process_list = require("./process-list.png")

  resetForm(form?: NgForm){
    if(form != null)
      form.resetForm();
    this.service.userData = {
      id : "",
      fullName : "",
      Email : "",
      password: "",
      profession : "",
      username: "",
      userBio: "",
      profileImageURL : "",
      schoolStudent : "",
      collegeStudent : "",
      schoolName : "",
      collegeName : "",
      schoolStandard : 0,
      collegeMajor : ""
    }
  }

  userID : string;
  schoolStd : boolean = false;
  collegeStd : boolean = false;

  profileEducationChoiceSubmit(form:NgForm, pageName : string){
    let data = form.value; 
    delete data.id;

    this.firestore.doc('customers/' + this.userID).update(data)

    this.resetForm();
    this.router.navigate([`${pageName}`]);
  }

}
