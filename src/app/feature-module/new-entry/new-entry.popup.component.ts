import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-new-entry.popup',
  templateUrl: './new-entry.popup.component.html',
  styleUrls: ['./new-entry.popup.component.scss'],
})
export class NewEntryPopupComponent implements OnInit {
  public age = {
    name: 'Volljaehrig',
    options: [
      'Ja',
      'Nein',
      'Patient*in kann oder will keine Angabe machen',
      'nicht gefragt/dokumentiert',
    ],
  };
  public sex = {
    name: 'Geschlecht',
    options: [
      'mänlich',
      'weiblich',
      'inter/ divers',
      'Patient*in kann oder will keine Angabe machen',
      'nicht gefragt/dokumentiert',
    ],
  };
  public living = {
    name: 'Wohnsituation',
    options: [
      'in eigener Wohnung / eigenem Haus',
      'bei Familie, Partner:in oder Bekannten (bei der Wohnung handelt es sich nicht um die eigene)',
      'Frauenhaus',
      'Flüchtlings-/ Asylunterkunft',
      'nicht gefragt / dokumentiert',
      'Hotel, Pension auf private Rechnung',
      'ohne Unterkunft: „auf der Straße leben“, „Platte machen“; auch „PKW-Schläfer“',
    ],
  };
  public legalStatus = {
    name: 'Aufenthaltstatus',
    options: [
      'in Duldung',
      'folgender anderer Status', // TODO
      'mit laufendem Asylantrag (Aufenthaltsgestattung)',
      'Deutsche Staatsbürger*in',
      'Aufenthalt über 3 Monate und Freizügigkeit wurde nicht entzogen',
      'nicht gefragt / dokumentiert',
      'EU-Bürger*in',
    ],
  };
  public insurance = {
    name: 'KV',
    options: [
      'Leistungen nach AsylbLG ohne elektronische Gesundheitskarte)',
      'ohne Versicherungsschutz (oder ungeklärt, sodass Patient*in nirgends Leistungen in Anspruch nimmt)',
      'Leistungen nach AsylbLG ohne elektronische Gesundheitskarte)',
      'eingeschränkte Leistungen einer deutschen GKV (e.g. wegen Beitragsschulden)',
      'eingeschränkte Leistungen einer deutschen PKV (e.g. Notlagentarif)',
      'gültige Reise- oder Auslandskrankenversicherung',
      'nicht gefragt / dokumentiert',
      'ohne Versicherungsschutz (oder ungeklärt, sodass Patient*in nirgends Leistungen in Anspruch nimmt)',
    ],
  };
  public emergencyInsurance = {
    name: 'NotvallV',
    options: ['Ja', 'Nein', 'nicht gefragt / dokumentiert'],
  };
  public necessity = {
    name: 'MediV',
    options: [
      'Nein, der medizinische Versorgungsbedarf blieb ungedeckt',
      'kein med. Versorgungsbedarf vorhanden / nicht zutreffend (z.B. ausschließlich Beratung)',
      'unklar',
      'mit Vermittlungsaufwand und/oder Kostenübernahme durch die Anlaufstelle',
    ],
  };
  public medicalArea = {
    name: 'Fachebereich',
    options: [
      'nicht zutreffend (z.B. ausschließlich Beratung)',
      'Allgemeinmedizin',
      'Innere Medizin',
      'Chirurgie',
      'Gynäkologie',
      'Zahnmedizin',
      'Psychiatrie / Psychosomatik / Psychotherapie',
      'folgende(r)', // TODO
      'nicht dokumentiert',
    ],
  };
  public isLegalOther = false;
  public isMedicalOther = false;

  constructor(
    public dialogRef: MatDialogRef<NewEntryPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {}
  ) {}

  ngOnInit(): void {}

  cancel() {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close();
  }

  checkLegalOtherSelected($event: MatSelectChange) {
    this.isLegalOther = $event.value === 'folgender anderer Status';
  }

  checkMedicalAreaOtherSelected($event: MatSelectChange) {
    this.isMedicalOther = $event.value === 'folgende(r)';
  }
}
