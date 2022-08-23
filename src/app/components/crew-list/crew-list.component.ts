import { Component, OnInit } from '@angular/core';
import { CrewService } from 'src/app/services/crew.service';
import { Crew } from 'src/app/models/crew';
import { MatDialog } from '@angular/material/dialog';
import { AddCrewComponent } from '../add-crew/add-crew.component';

@Component({
  selector: 'app-crew-list',
  templateUrl: './crew-list.component.html',
  styleUrls: ['./crew-list.component.css']
})

export class CrewListComponent implements OnInit {

  crews: Crew[] = [];

  constructor(private crewService:CrewService,public dialog:MatDialog) { }

  ngOnInit(): void {
    this.crewService.getCrews().subscribe (crews => this.crews = crews);
  }

  openAddCrewDialog(): void {
    const dialogRef = this.dialog.open(AddCrewComponent, {
      width: '500px'
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);

    });
  }

}
