import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {

  @Input() certificates:string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
