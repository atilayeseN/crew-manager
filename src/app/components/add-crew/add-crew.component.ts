import { Component, OnInit } from '@angular/core';
import { Crew } from 'src/app/models/crew';
import { CrewService } from 'src/app/services/crew.service';

@Component({
  selector: 'app-add-crew',
  templateUrl: './add-crew.component.html',
  styleUrls: ['./add-crew.component.css']
})
export class AddCrewComponent implements OnInit {

  crew:Crew

  certificate:string = "";

  constructor(private crewService:CrewService) { }

  ngOnInit(): void {
    this.crew = new Crew();
  }

  addCertificate():void {
    if(!this.crew.certificates) {
      this.crew.certificates = []
    }
    if (this.certificate !== null) {
      if (!this.crew.certificates.includes(this.certificate)) {
        this.crew.certificates.push(this.certificate);
      }
    }

  }

  remove(certificate:string):void {
    const index = this.crew.certificates.indexOf(certificate);

    if (index >= 0) {
      this.crew.certificates.splice(index, 1);
    }
  }

  save():void {
    this.crewService.addCrew(this.crew).subscribe(e => alert(e.firstName + "succesfully saved"));
  }

}
