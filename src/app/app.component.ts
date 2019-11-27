import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.less']
})
export class AppComponent implements OnInit {
  constructor(private readonly translateService: TranslateService) {
  }
  ngOnInit(): void {
    this.translateService.use('en');
  }
}
