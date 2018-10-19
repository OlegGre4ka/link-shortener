import { Component, OnInit, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'inst-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private translate: TranslateService) { }
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  ngOnInit() {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    this.translate.use('ru');
  }
  useLanguage(language: string) {
    this.translate.use(language);
  }

}


