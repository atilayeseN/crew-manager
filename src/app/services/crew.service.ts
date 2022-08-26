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
    if (Object.values(crew).length !== 0) {
      crew.id = idGenerate(crews);

      crews.push(crew);

      return of(crew)
    }
    return of()
  }

  deleteCrew(crew: Crew): Observable<Crew>{
    const index = crews.indexOf(crew)
    if (index !== -1) {
      crews.splice(index, 1);

      return of(crew);
    }
    return of();
  }
}
