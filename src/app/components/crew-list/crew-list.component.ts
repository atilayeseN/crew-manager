import { Component, OnInit } from '@angular/core';
import { CrewService } from 'src/app/services/crew.service';
import { Crew } from 'src/app/models/crew';

@Component({
  selector: 'app-crew-list',
  templateUrl: './crew-list.component.html',
  styleUrls: ['./crew-list.component.css']
})

export class CrewListComponent implements OnInit {

  crews: Crew[] = [];

  constructor(private crewService:CrewService) { }

  getCrews(): void {
    this.crewService.getCrews().subscribe (crews => this.crews = crews);
  }

  ngOnInit(): void {
    this.getCrews();
  }

}
