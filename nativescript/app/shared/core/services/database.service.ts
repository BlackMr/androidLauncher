import {Injectable, Inject} from '@angular/core';
import {FIREBASE} from '../../../app/frameworks/core/index'

@Injectable()
export class NSDatabaseService {
  private database:any;
  private onSync:Function;
  private userID:string;
  constructor(@Inject(FIREBASE) firebase:any) {
    console.log('Constructing NSDatabaseService');
    this.database = firebase;
    this.database.init({
      persist: true // Allow disk persistence. Default false.
    }).then((instance:any) => {
      console.log('firebase.init successful');
    }, (error:any) => {
      console.log('firebase.init error: ' + error);
    });
  }

  sync(path: string, onValueReceived: Function):void {
    this.onSync = (result:any) => onValueReceived(result.value);
    this.database.addValueEventListener(this.onSync, path);
  }

  addChild(path:string, data:any, callback?:Function):void {
    this.database.push(path, data).then(function (result:any) {
      console.log('created key: ' + result.key);
      if (callback) {
        callback(result.key)
      }
    });
  }
}