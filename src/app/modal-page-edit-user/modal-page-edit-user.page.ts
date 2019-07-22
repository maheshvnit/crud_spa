import { Component, OnInit } from '@angular/core';

import { ModalController, NavParams } from '@ionic/angular';

import * as $ from 'jquery';
import { User } from '../services/user.service';

@Component({
  selector: 'app-modal-page-edit-user',
  templateUrl: './modal-page-edit-user.page.html',
  styleUrls: ['./modal-page-edit-user.page.scss'],
})
export class ModalPageEditUserPage implements OnInit {

  modalTitle:string;
  modelId:number;
  user:User; 
  constructor(
    private modalController: ModalController,
    private navParams: NavParams
  ) { }
 
  ngOnInit() {
    console.table(this.navParams);
    this.modelId = this.navParams.data.paramID;
    this.modalTitle = this.navParams.data.paramTitle;
    this.user = this.navParams.data.user;
  }

  async closeModal() {
    //const onClosedData: string = "Wrapped Up!";
    let namef = $('#namef').val();
    let namel = $('#namel').val();
    let phone = $('#phone').val();
    let onClosedData = {first_name:namef,last_name:namel,phone:phone,id:this.modelId, user:this.user};

    await this.modalController.dismiss(onClosedData);
  }

}
