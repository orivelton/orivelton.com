import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.scss']
})
export class TranslateComponent implements OnInit {

  selected: string;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    this.selected = language;
  }

  ngOnInit() {
    console.log(this.selected);
  }

}
