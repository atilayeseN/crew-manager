import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Crew } from 'src/app/models/crew';


@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditPageComponent>,
    @Inject(MAT_DIALOG_DATA) public crew: Crew) { }

  ngOnInit(): void {

  }

}
