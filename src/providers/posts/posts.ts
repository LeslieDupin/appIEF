import { Injectable, NgZone } from '@angular/core';
import { DataProvider } from '../data/data';
import { Subject } from 'rxjs/Subject';

/*
  Generated class for the PostsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class PostsProvider {

  // db: any;
  // remote: string = 'http://127.0.0.1:5984/couchief';

  // constructor() {
  //   this.db = new PouchDB('couchief');

  //   let options = {
  //     live: true,
  //     retry: true
  //   };

  //   this.db.sync(this.remote, options);
  // }

  // getPosts(): Observable<any>{
  //     return Observable.from(this.db.query('posts/by_date_published'));
  // }
  
postSubject: any = new Subject();

  constructor(public dataService: DataProvider, public zone: NgZone) {
    this.dataService.db.changes({live: true, since: 'now', include_docs: true}).on('change', (change) => {
      if(change.doc.type === 'post') {
        this.emitPosts();
      }
    });
  }

  getPosts() {
    this.emitPosts();

    return this.postSubject;
  }

  addPost(post): void {
    this.dataService.db.put(post);
  }

  emitPosts(): void {
    this.zone.run(() => {
      this.dataService.db.query('posts/by_date_published').then((data) => {
        let posts = data.rows.map(row => {
          return row.value;
        });
        this.postSubject.next(posts);
      });
    });
  }
}
