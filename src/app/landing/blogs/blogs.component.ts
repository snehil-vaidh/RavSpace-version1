import { Component, OnInit } from '@angular/core';
declare function require(path: string):any;

import { NgModule } from "@angular/core";

@NgModule({
  declarations:[],
  imports:[],
  providers:[]
})


@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent {

   
  imagesrc1=require('./shapes1.png');
  imagesrc2=require('./blog-1.jpg');
  imagesrc3=require('./blog-2.png');
  imagesrc4=require('./blog-3.jpg');
  imagesrc5=require('./blog-4.png');
  logo = require("./logo.png");

}
