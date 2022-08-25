import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs';
import { Crew } from 'src/app/models/crew';
import { CrewService } from 'src/app/services/crew.service';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.css']
})
export class CardPageComponent implements OnInit {

  crew : Crew|undefined;

  constructor(private route: ActivatedRoute,private crewService:CrewService) { }

  ngOnInit(): void {
    this.getCrews();
  }

  getCrews(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.crewService.getCrewById(+id).subscribe(crew => this.crew = crew)
    }

  }

}
