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

  getCrewById(id: number): Observable<Crew|undefined> {
    return of(crews.find(e => e.id === id));
  }

  addCrew(crew : Crew): Observable<Crew> {
    if (!crew.id) {
      crew.id = idGenerate(crews);

      crews.push(crew);

      return of(crew)
    }
    else {
      const index = crews.findIndex(e => {
        return crew.id === e.id
      })

      crews[index] = crew;

      return of(crew);

    }
  }
}
