import { Injectable } from '@angular/core';
import { customersUser, contactCustomers } from './user.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userData : customersUser;
  userCollection : AngularFirestoreCollection<customersUser>;
  users : Observable<customersUser>;  
  imageDetails : AngularFireObject<any>;
  contactUsData : contactCustomers;

  constructor(
    private firestore: AngularFirestore,
    private fireDb : AngularFireDatabase
  ) {}

  getUserData(){
    return this.firestore.collection('customers').snapshotChanges()
  }

  getDisplayData(id : string){
    this.users = this.firestore.doc('customers/' + id).valueChanges();
    return this.users;
  }

  getImageDetails(){
    this.imageDetails = this.fireDb.object('imageDetails');
  }

  insertImageDetails(imageDetails){
    this.imageDetails.update(imageDetails);
  }
}
