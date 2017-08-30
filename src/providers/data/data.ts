import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DataProvider {

db: any;
remote: string = 'http://127.0.0.1:5984/couchief'

  constructor() {
    this.db = new PouchDB('couchief');

    let options = {
      live: true,
      retry: true,
      continuous: true
    };

    this.db.sync(this.remote, options);
  }

}
