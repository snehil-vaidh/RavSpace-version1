import { Component, OnInit } from '@angular/core';
declare function require(path: string):any;

import { NgModule } from "@angular/core";

@NgModule({
  declarations:[],
  imports:[],
  providers:[]
})


@Component({
  selector: 'app-howitwork',
  templateUrl: './howitwork.component.html',
  styleUrls: ['./howitwork.component.css']
})
export class HowitworkComponent {

  
  imagesrc1=require('./shapes1.png');
  logo = require("./logo.png");
  // video1 = require("./video1.mp4");
  // video2 = require("./video2.mp4");

}
