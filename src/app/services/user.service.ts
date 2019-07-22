import { Injectable } from '@angular/core';

//import { ModalController } from '@ionic/angular';


//import { ModalPageLoadingPage } from '../modal-page-loading/modal-page-loading.page';


import { DatabaseService } from '../services/database.service';

import * as $ from 'jquery';
//import * as moment from 'moment';
//import { environment } from '../../environments/environment';
//import { from } from 'rxjs';
//import { async } from 'q';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user: User;
  public users: User[] = [];  


  public changeDetected: Boolean = false;

  constructor(

    public storageService: DatabaseService,
    //public modalCtrl : ModalController

  ) { }


  async loadingStart() {
    console.log("-loadingStart--1--"); 
    let that = this;

    let appRoot = document.getElementsByTagName("app-root")[0];

    appRoot.setAttribute("style","opacity:0.5;");  

    $(".loader-box").show();

    console.log("-loadingStart--3--"); 
  } 

  async loadingComplete() {
    console.log("-loadingComplete--1--"); 
    let that = this;

    let appRoot = document.getElementsByTagName("app-root")[0];
 
    appRoot.setAttribute("style","opacity:1;");
    $(".loader-box").hide();

    console.log("-loadingComplete--2--"); 
  }  


  // register user
  userRegister(formData) {
    console.log('--UserService--userRegister--------1------');
    let that = this;

    console.log(formData);

    if(formData == undefined || formData.first_name == undefined || formData.first_name == null || formData.first_name == "")
    {
      return;
    }

    //let usrcnt = that.localStorage.getItem("usrcnt");
    //let usrcnt = that.storageService.getItem("usrcnt");

    that.storageService.getItem("usrcnt").then(res=> {
      console.log("---UserService---userRegister--then-2-"); 
      console.log(res); 

      that.addUserToDatabase(res, formData);

    }).catch(err=>{
      console.log("---UserService---userRegister--catch-2-"); 
      console.log(err); 
    })    

    

    console.log('--UserService--userRegister--------2------');
  }  

  async addUserToDatabase(usrcnt, formData) {
    console.log('--UserService--addUserToDatabase--------1------');
    let that = this;

    console.log(usrcnt);
    let usrcntN = parseInt(usrcnt);
    if(usrcntN==null || isNaN(usrcntN))
      usrcntN = 0;
    console.log(usrcnt);
    usrcntN++;

    let labelName = "user-" + usrcntN;

    let first_name = formData.first_name;
    let last_name = formData.last_name;
    let phone = formData.phone;


    /*
      id: any; // unique user id : will use integer no
      first_name: any; //  first name 
      last_name: any; //  last name 
      phone: number; //  phone number 
      label: any; // display label for user user id [Full name : first name last name]
    */

    that.user = new User();

    that.user.id = usrcntN;
    that.user.first_name = first_name;
    that.user.last_name = last_name;
    that.user.phone = phone;
    that.user.label = labelName;


    console.log(that.users);
    console.log(that.user);
    that.users.unshift(that.user);

    
    that.storageService.setItem("users", that.users);

    that.storageService.setItem("usrcnt", usrcntN);  
    
    that.changeDetected = true;


    console.log('--UserService--addUserToDatabase--------2------');
  }      
  

  // edit user
  changeUser(formData) {
    console.log('--UserService--changeUser--------1------');
    let that = this;
    console.log('formData');
    console.log(formData);

    if(formData == undefined || formData.id == undefined || formData.id == null || formData.id == "")
    {
      return;
    }

    let first_name = formData.first_name;
    let last_name = formData.last_name;
    let phone = formData.phone;

    /*
      id: any; // unique user id : will use integer no
      first_name: any; //  first name 
      last_name: any; //  last name 
      phone: number; //  phone number 
      label: any; // display label for user user id [Full name : first name last name]
         
    */

    let i=0;
    let id = formData.user.id;

    for (; i<that.users.length; i++) {
      if(that.users[i].id == id)
      {        
        that.users[i].first_name = first_name;
        that.users[i].last_name = last_name;
        that.users[i].phone = phone;
      }
    }  
  
    that.storageService.setItem("users", that.users);

    that.changeDetected = true;

    console.log('that.users');

    console.log(that.users);

    console.log('--UserService--changeUser--------2------');
  }    

  // remove user
  removeUser(idx, uid, user) {
    console.log('----UserService--------removeUser------');
    let that = this;

    let pns = that.users[idx];
    if(uid == pns.id && pns.id == user.id)
    {
      // remove user by index
      let rmPns = that.users.splice(idx,1);
      that.user = null;
      // save on store remaining
      that.storageService.setItem("users", that.users);
    }

    console.log('----UserService--------removeUser------');
  }  


  // Load users function

  async loadUsers() {
    console.log('--UserService--loadUsers--------1------');
    let that = this;

    console.log('that.users');

    console.log(that.users);
    let res = await that.storageService.getItem("users");
    console.log(res);
    if(res != undefined && res != null) 
    {
      that.users = res;
      console.log(that.users);      
    }

    console.log('--UserService--loadUsers--------2------');
  } 
  
  loadUserByIndx(idx) {
    console.log('--UserService--loadUserByIndx--------1------');
    let that = this;

    that.user = that.users[idx];
    console.log(that.user);

    console.log('--UserService--loadUserByIndx--------2------');
  } 
  
  loadUserById(id) {
    console.log('--UserService--loadUserById--------1------');
    let that = this;

    let i=0;

    for (; i<that.users.length; i++) {
      if(that.users[i].id == id)
      {
        that.user = that.users[i];
      }
    }    

    console.log(that.user);

    console.log('--UserService--loadUserById--------2------');
  }   



  // dummy function

  dummyFunction() {
    console.log('--UserService--dummyFunction--------1------');
    let that = this;

  



    console.log('--UserService--dummyFunction--------2------');
  }  

  // dummy function with async

  async dummyAsyncFunction() {
    console.log('--UserService--dummyAsyncFunction--------1------');
    let that = this;

    //await callAnyfunction();



    console.log('--UserService--dummyAsyncFunction--------2------');
  }



}  // end of UserService


export class User {

  id: any; // unique user id : will use integer no
  first_name: any; //  first name 
  last_name: any; //  last name   
  phone: number; //  phone number
  label: any; // display label for user user id [Full name : first name last name]

} // end of User
