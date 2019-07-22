import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

declare let window: any; // <--- Declare it like this

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  public mode: any = 0; // sql-1/local-0
  public stObj: any = null;

  constructor(private storage: Storage) { 
    let device = window.device;
    if(window.device != undefined && device.platform != undefined && device.platform === "Android")
    {
      this.mode = 1; 
      this.stObj = this.storage;
    }
    else
    {
      this.mode = 0; 
      this.stObj = localStorage;
    }  
    
    console.log('this.mode');
    console.log(this.mode);
    
  }

  async getItem(keyN)
  {
    console.log('===getItem=============keyN');
    console.log('keyN');
    console.log(keyN);
    let that = this;
    let rdata: null;
    if(that.mode == 1) // android
    {
      await that.stObj.get(keyN).then((rdata2) => {
        console.log('rdata--then--');
        rdata = rdata2 || [];
        console.log('rdata--------------1--');
        console.log(rdata);
        console.log('rdata--------------2--');
        return rdata;
      });
      console.log('rdata--------------5--');
      console.log('rdata');
      console.log(rdata);
      console.log('rdata--------------6--');
    }
    else
    {
      let pns = await that.stObj.getItem(keyN);
      console.log('pns');
      console.log(pns);
      if(pns != undefined && pns != null)
        rdata = JSON.parse(pns);  
    }
    console.log('rdata--------------3--');
    console.log('rdata');
    console.log(rdata);
    console.log('rdata--------------4--');
    return rdata;
  }

  async setItem(keyN, sdata)
  {
    let that = this;
    if(that.mode == 1) // android
    {
      await that.stObj.set(keyN, sdata);
    }
    else
    {
      let sdata2;
      if(typeof sdata == "object")
        sdata2 = JSON.stringify(sdata);
      else
        sdata2 = sdata.toString(); 
      await that.stObj.setItem(keyN, sdata2);
    }
  }

} // end of DatabaseService
