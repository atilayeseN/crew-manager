import { Component, OnInit } from '@angular/core';
import { CrewService } from 'src/app/services/crew.service';
import { Crew } from 'src/app/models/crew';
import { MatDialog } from '@angular/material/dialog';
import { AddCrewComponent } from './add-crew/add-crew.component';
import { EditPageComponent } from './edit-page/edit-page.component';

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

  totalIncome(dailyRate:number,daysOnBoard:number,currency:string):string {
    return (dailyRate * daysOnBoard) + currency;
  }

  allIncomesByCurrency():string {
    let dollarSum:number = 0;
    let euroSum:number = 0;

    this.crews.forEach((e) => {
      if (e.currency === "$") {
        dollarSum = dollarSum + (e.dailyRate * e.daysOnBoard);
      }
      else {
        euroSum = euroSum + (e.dailyRate * e.daysOnBoard);
      }
    })

    return "$: " + dollarSum + " € " + euroSum
  }

  addNewCrewToList(crew:Crew): void {
    this.crews.push(crew)
  }

  openEditCrewDialog(crew:Crew): void {
    const dialogRef = this.dialog.open(EditPageComponent, {
      width: '600px',
      height: '500px',
      data: crew
    })
    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

  openAddCrewDialog(): void {
    const dialogRef = this.dialog.open(AddCrewComponent, {
      width: '600px',
      height: '500px'
    })

    dialogRef.afterClosed().subscribe(result => {
      this.crews.push(result);

    });
  }

}
