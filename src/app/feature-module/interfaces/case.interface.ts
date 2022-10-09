export interface ICase {
  id?: number;
  datum: Date;
  volljarig: string;
  geschlecht: string;
  wohnsituation: string;
  wohnsituation_zusatz?: string;
  aufenthaltstatus: string;
  aufenthaltstatus_zusatz?: string;
  krankenversicherung: string;
  notvallv: string;
  medivers: string;
  fachbereich: string;
  fachbereich_zusatz?: string;
}
