import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-bar',
  templateUrl: './language-bar.component.html',
  styleUrls: ['./language-bar.component.css'],
})
export class LanguageBarComponent implements OnInit {


  selectedLang:string = ""

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'fr', 'pt']);
    translate.setDefaultLang('en');
  }

  changeLang(event : any) {
    this.translate.use(event.value);
  }

  ngOnInit(): void {}
}
