import { Injectable } from '@angular/core';
import { Crew } from '../models/crew';
import { Crews as crews } from '../mock';
import { Observable, of } from 'rxjs';
import { idGenerate } from '../utils';

@Injectable({
  providedIn: 'root'
})
export class CrewService {

  constructor() { }

  getCrews(): Observable<Crew[]> {
    return of(crews);
  }

  save(crew : Crew) {
    if (crew.id === null) {
      crew.id = idGenerate(crews);
    }
    else {
      const index = crews.findIndex(e => {
        return crew.id === e.id
      })

      crews[index] = crew;
      
    }
  }
}