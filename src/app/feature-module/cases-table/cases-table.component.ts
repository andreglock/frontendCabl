import {Component} from '@angular/core';
import { ICase } from '../interfaces/case.interface';

/**
 * @title Basic table
 */
@Component({
  selector: 'app-cases-table',
  templateUrl: './cases-table.component.html',
  styleUrls: ['./cases-table.component.scss']
})
export class CasesTableComponent {
  displayedColumns = [
    'datum', 
    'volljarig', 
    'geschlecht', 
    'wohnsituation', 
    'aufenthaltstatus', 
    'krankenversicherung', 
    'notvallv', 
    'medivers', 
    'fachbereich'
  ];
  dataSource = ELEMENT_DATA;
}

const ELEMENT_DATA: ICase[] = [
  {
    datum: new Date(), 
    volljarig: 'ja', 
    geschlecht: 'mänlich', 
    wohnsituation: 'nicht gefracht',
    aufenthaltstatus: 'data',
    krankenversicherung: 'data',
    notvallv: 'data',
    medivers: 'data',
    fachbereich: 'data',
  },
  {
    datum: new Date(), 
    volljarig: 'ja', 
    geschlecht: 'mänlich', 
    wohnsituation: 'nicht gefracht',
    aufenthaltstatus: 'data',
    krankenversicherung: 'data',
    notvallv: 'data',
    medivers: 'data',
    fachbereich: 'data',
  },
  {
    datum: new Date(), 
    volljarig: 'nicht', 
    geschlecht: 'weiblich', 
    wohnsituation: 'nicht gefracht',
    aufenthaltstatus: 'nein',
    krankenversicherung: 'nein',
    notvallv: 'data',
    medivers: 'ja',
    fachbereich: 'unklar',
  },

];

