declare function require(path: string):any;

import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { NgModule } from "@angular/core";
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { customersUser } from '../shared/user.model';
import { Router } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { LoginfailComponent } from './loginfail/loginfail.component';

@NgModule({
  declarations:[],
  imports:[],
  providers:[UserService]
})

@Component({
  selector: 'app-landing',
  templateUrl:'./landing.component.html' ,
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(
    private service: UserService,
    private firestore: AngularFirestore,
    private router : Router,
    private toastr: ToastrModule,
    private dialog: MatDialog
    ) { }
  

  userList : customersUser[];

  ngOnInit() {
    this.resetForm()
    this.service.getUserData().subscribe(actionArray =>{
      this.userList = actionArray.map(item =>{
        return {
          id : item.payload.doc.id,
          ...item.payload.doc.data()
        } as customersUser;
      })
    });
  }

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

  loginFailed(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    this.dialog.open(LoginfailComponent, dialogConfig)
  }

  login(form:NgForm, pageName: string){
    let data = form.value;
    this.userList.map(item =>{
      if(item.Email == data.Email && item.password == data.loginPassword)
        this.router.navigate([`${pageName}`]);
      else
        this.loginFailed();
    })
  }

}
