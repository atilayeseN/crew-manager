import { Injectable } from '@angular/core';
import { Crew } from '../models/crew';
import { Crews } from '../mock';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrewService {

  constructor() { }

  getCrews(): Observable<Crew[]> {
    return of(Crews);
  }
}
