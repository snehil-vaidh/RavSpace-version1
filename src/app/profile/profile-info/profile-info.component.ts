declare function require(path: string):any;

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from "@angular/core";
import { UserService } from 'src/app/shared/user.service';
import { NgForm } from '@angular/forms';
import { AngularFireStorage, AngularFireUploadTask } from "@angular/fire/storage";
import { AngularFirestore } from "@angular/fire/firestore";

import * as firebase from "firebase";
import { DataService } from 'src/app/shared/data.service';
import { customersUser } from 'src/app/shared/user.model';
import { finalize } from "rxjs/operators";

@NgModule({
  declarations:[],
  imports:[],
  providers:[]
})


@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {

  transferData:string;

  constructor(
    private router: Router,
    private service : UserService,
    private storage : AngularFireStorage,
    private firestore : AngularFirestore,
    private transferDataService : DataService
    ) { }



  
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

  userList : customersUser[];
  userID : string = "";
  
  ngOnInit() {
    this.resetForm();
    this.transferDataService.currentData.subscribe(data => this.transferData = data);
    // this.service.getImageDetails();

    this.service.getUserData().subscribe(actionArray =>{
      this.userList = actionArray.map(item =>{
        return {
          id : item.payload.doc.id,
          ...item.payload.doc.data()
        } as customersUser;
      })
    });
  }

  background_1 = require("./background-1.png")
  background_2 = require("./background-2.png")
  background_4 = require("./background-4.png")
  process_list = require("./process-list.png")
  upload_img = require("./upload-img.png")


  file: File = null;
  metaData : object = {};
  storageRef : firebase.storage.Reference;
  username : string = "";


  // onFileSelected(event : any){
  //   this.file = event.target.files[0];

  //   this.metaData = {'contentType' : this.file.type};
  // }




  
  profileInfoSubmit(form:NgForm, pageName: string){

    let data = form.value; 
    delete data.id;
    
    this.username = data.username;

    

    // var filePath =  `${this.username}_${new Date().getTime()}`;
    // const fileRef = this.storage.ref(filePath);
    // this.storage.upload(filePath, this.file).snapshotChanges().pipe(
    //   finalize(() => {
    //     fileRef.getDownloadURL().subscribe((url) => {
    //       data.profileImageURL = url;
    //       this.service.insertImageDetails(url);
    //     })
    //   })
    // ).subscribe();

    // console.log(data.profileImageURL);

    
    
    this.userList.map(item =>{
      console.log("Item of each userList : ", item);
      console.log("Item Email ID inside Map function: ",item.Email)
      console.log("Transfer Data inside Map function: ",this.transferData)
      if(item.Email == this.transferData){
        console.log("Item match found")
        this.userID = item.id;
        this.transferData = item.id;
      }
    });

    localStorage.setItem('userId', this.transferData);

    console.log("URL : ", data.profileImageURL);
    
    this.firestore.doc('customers/' + this.userID).update(data);
    this.resetForm();
    this.router.navigate([`${pageName}`]);
  }

}
