import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { TranslateComponent } from '../translate/translate.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public user:any;
  constructor() {}
  ngOnInit() {}
}
