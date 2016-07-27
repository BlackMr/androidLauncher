import {Injectable, Inject} from '@angular/core';
import {FIREBASE} from '../../core/index';

@Injectable()
export class DatabaseService {
  private database:any;
  private onSync:Function;
  private userID:string;
  constructor(@Inject(FIREBASE) firebase:any) {
    console.log('Constructing DatabaseService');
    // Initialize Firebase
    var config = {
      // your web config from Firebase console
      apiKey: "AIzaSyBnbnviMurFkLYS8sAOujQEj5pfFns9KKY",
      authDomain: "deneme-44e80.firebaseapp.com",
      databaseURL: "https://deneme-44e80.firebaseio.com",
      storageBucket: "deneme-44e80.appspot.com"
    };
    firebase.initializeApp(config);
    this.database = firebase.database();
  }

  sync(path: string, onValueReceived: Function):void {
    this.onSync = (snapshot:any) => onValueReceived(snapshot.val());
    this.database.ref(path).on('value', this.onSync);
  }

  addChild(path: string, data:any, callback?:Function):void {
    this.database.ref(path).push(data, (err:any) => {
      if (callback && !err) {
        callback();
      }
    });
  }
}
