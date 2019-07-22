import { Component } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { ModalPageCreateUserPage } from '../modal-page-create-user/modal-page-create-user.page';
import { ModalPageEditUserPage } from '../modal-page-edit-user/modal-page-edit-user.page';



import { UserService } from '../services/user.service';

//import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  dataReturned:any;

  constructor(
    public userService: UserService, 
    public modalCtrl : ModalController
  ) { }


  async removeUser(idx, uid, user){
    console.log("-removeUser--"); 
    await this.userService.removeUser(idx, uid, user);
    console.log("-removeUser--"); 
  }  



  async openCreateUserModal() {
    console.log("-openCreateUserModal--"); 
    let that = this;
    const modal = await this.modalCtrl.create({
      component: ModalPageCreateUserPage,
      componentProps: {
        "paramID": null,
        "paramTitle": "Create New User"
      }
    });
 
    modal.onDidDismiss().then((dataReturned) => {
      console.log("-openCreateUserModal-dataReturned-"); 
      console.log(dataReturned); 
      if (dataReturned !== null) {
        that.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
        that.userService.userRegister(that.dataReturned);
      }
    });
    console.log("-openCreateUserModal--"); 
    return await modal.present();
    //console.log("-openCreateUserModal--"); 
  }  

  async openEditUserModal(idx, uid, user) {
    console.log("-openEditUserModal--"); 
    let that = this;
    const modal = await this.modalCtrl.create({
      component: ModalPageEditUserPage,
      componentProps: {
        "paramID": uid,
        "paramTitle": "Change User Name",
        "idx": idx,
        "uid": uid,
        "user": user,
      }
    });
 
    modal.onDidDismiss().then((dataReturned) => {
      console.log("-openEditUserModal-dataReturned-"); 
      console.log(dataReturned); 
      if (dataReturned !== null) {
        that.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
        that.userService.changeUser(that.dataReturned);
      }
    });
    console.log("-openEditUserModal--"); 
    return await modal.present();
    //console.log("-openEditUserModal--"); 
  }   


  
  ngOnInit() {
    console.log("-ngOnInit--");    
    let that = this;
    that.loadData();
    console.log("---ngOnInit-2-"); 
  }

  // ngAfterContentInit()
  ngAfterContentInit() {
    console.log("--ngAfterContentInit-1-");
    console.log(this.userService.users);
    console.log("--ngAfterContentInit-2-");
  }
  // ngAfterViewInit()
  ngAfterViewInit() {
    //this.photoService.loadSaved();
    console.log("---ngAfterViewInit-1-");
    console.log(this.userService.users);
    console.log("---ngAfterViewInit-2-"); 
  }

  async loadData(){
    console.log("-HomePage--loadData-1-"); 
    let that = this;
    await that.userService.loadingStart();
    await that.userService.loadUsers();
    await that.userService.loadingComplete();
    console.log("-HomePage--loadData-2-"); 
  }   


  ngOnChanges() {
    console.log('--HomePage--ngOnChanges--------1------');
    let that = this;
    console.log('--HomePage--ngOnChanges--------2------');
  }  

  // ngDoCheck

  ngDoCheck() {
    console.log('--HomePage--ngDoCheck--------1------');
    let that = this;  
    console.log('--HomePage--ngDoCheck--------that.userService.changeDetected------');
    console.log(that.userService.changeDetected);
    if(that.userService.changeDetected)
    {
      // load user again
      console.log('--HomePage--ngDoCheck--------that.userService.changeDetected----loadData--');
      that.userService.changeDetected = false;
      that.loadData();
    }
    console.log('--HomePage--ngDoCheck--------2------');
  }  




} // end of HomePage
