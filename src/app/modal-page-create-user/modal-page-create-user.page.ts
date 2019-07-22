import { Component, OnInit } from '@angular/core';

import { ModalController, NavParams } from '@ionic/angular';

import * as $ from 'jquery';

@Component({
  selector: 'app-modal-page-create-user',
  templateUrl: './modal-page-create-user.page.html',
  styleUrls: ['./modal-page-create-user.page.scss'],
})
export class ModalPageCreateUserPage implements OnInit {

  modalTitle:string;
  modelId:number;
 
  constructor(
    private modalController: ModalController,
    private navParams: NavParams
  ) { }
 
  ngOnInit() {
    console.table(this.navParams);
    this.modelId = this.navParams.data.paramID;
    this.modalTitle = this.navParams.data.paramTitle;
  }

  async closeModal() {
    //const onClosedData: string = "Wrapped Up!";
    let namef = $('#namef').val();
    let namel = $('#namel').val();
    let phone = $('#phone').val();
    let onClosedData = {first_name:namef,last_name:namel,phone:phone};

    await this.modalController.dismiss(onClosedData);
  }

}
