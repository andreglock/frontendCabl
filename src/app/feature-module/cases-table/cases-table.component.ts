import { AfterViewInit, Component } from '@angular/core';
import { CaseService } from 'src/app/case.service';
import { ICase } from '../interfaces/case.interface';

/**
 * @title Basic table
 */
@Component({
  selector: 'app-cases-table',
  templateUrl: './cases-table.component.html',
  styleUrls: ['./cases-table.component.scss'],
})
export class CasesTableComponent implements AfterViewInit {
  ELEMENT_DATA: ICase[] = [
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

  displayedColumns = [
    'datum',
    'volljarig',
    'geschlecht',
    'wohnsituation',
    'aufenthaltstatus',
    'krankenversicherung',
    'notvallv',
    'medivers',
    'fachbereich',
  ];
  dataSource = this.ELEMENT_DATA;

  constructor(private caseService: CaseService) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.caseService.get().subscribe(c => {
        console.log(c);
        this.dataSource = c;
      });
    });
  }
}
