declare function require(path: string):any;

import { Component,AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { NgModule } from "@angular/core";

@NgModule({
  declarations:[],
  imports:[],
  providers:[]
})


@Component({
  
  templateUrl: './aboutus.component.html',
  styleUrls:['./aboutus.component.css']
})
export class AboutusComponent implements AfterViewInit  {
  mySwiper: Swiper;


  founder1 = require("./shreyas.jpg");
  founder2 = require("./snehil.png");
  intern1 = require("./valio.jpg");
  intern2 = require("./aditi.jpg");
  imagesrc1=require('./shapes1.png')
  logo = require("./logo.png");
  background = require("./background-1.png");
  card1_img = require("./card1-img.png");
  card2_img = require("./card2-img.png");


  mySwiper1: Swiper;
  mySwiper2: Swiper;
  mySwiper3: Swiper;
  mySwiper4: Swiper;

  constructor() {}

  ngAfterViewInit() {
    this.mySwiper = new Swiper('.swiper1', {
      pagination: {
        el: '.swiper-pagination1',
       clickable:true,
      },
      
      navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1',
      },
     
      slidesPerView: 'auto',
        spaceBetween: 30
    });
    this.mySwiper1 = new Swiper('.swiper2', {
      pagination: {
        el: '.swiper-pagination2',
        clickable:true,
      },
      
      navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
      },

      slidesPerView: 'auto',
        spaceBetween: 30
    });
    this.mySwiper2 = new Swiper('.swiper3', {
      pagination: {
        el: '.swiper-pagination3',
        clickable:true,
      },
      
      navigation: {
        nextEl: '.swiper-button-next3',
        prevEl: '.swiper-button-prev3',
      },
    
      slidesPerView: 'auto',
        spaceBetween: 30
    });
    this.mySwiper3 = new Swiper('.swiper4', {
      pagination: {
        el: '.swiper-pagination4',
        clickable:true,
      },
      
      navigation: {
        nextEl: '.swiper-button-next4',
        prevEl: '.swiper-button-prev4',
      },
    
      slidesPerView: 'auto',
        spaceBetween: 30
    });

    
  }
  fireevent(){
    
    this.mySwiper = new Swiper('.swiper1', {
      autoplay:{
        delay:3000,
        disableOnInteraction:false,
      }
     
    });
  }
  nonfire(){
    this.mySwiper = new Swiper('.swiper1', {
      autoplay:false
    });
  }
  
  
  
  

}