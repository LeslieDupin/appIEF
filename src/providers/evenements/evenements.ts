import { Injectable, NgZone } from '@angular/core';
import { DataProvider } from '../data/data';
import { Subject } from 'rxjs/Subject';

/*
  Generated class for the EvenementsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class EvenementsProvider {

  evenementSubject: any = new Subject();

  constructor(public dataService: DataProvider, public zone: NgZone) {
    this.dataService.db.changes({live: true, since: 'now', include_docs: true}).on('change', (change) => {
      if(change.doc.type === 'evenement') {
        this.emitEvenements();
      }
    });
  }

  getEvenements() {
    this.emitEvenements();

    return this.evenementSubject;
  }

  addEvenement(evenement): void {
    this.dataService.db.put(evenement);
  }

  emitEvenements(): void {
    this.zone.run(() => {
      this.dataService.db.query('evenements/by_date_published').then((data) => {
        let evenements = data.rows.map(row => {
          return row.value;
        });
        this.evenementSubject.next(evenements);
      });
    });
  }
}
