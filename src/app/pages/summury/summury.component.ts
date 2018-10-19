import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'inst-summury',
  templateUrl: './summury.component.html',
  styleUrls: ['./summury.component.scss']
})
export class SummuryComponent implements OnInit {
  // tslint:disable-next-line:no-unused-expression
  walked_si;
  localStartSi = +window.localStorage.getItem('si');
  walked_ch;
  localStartCh = +window.localStorage.getItem('ch');
  walked_js;
  localStartJs = +window.localStorage.getItem('js');
  walked_gi ;
  localStartGi = +window.localStorage.getItem('gi');


  constructor() { }

  ngOnInit() {
    if (this.localStartSi === NaN) {
      this.walked_si = 0;
    } else {
      this.walked_si = this.localStartSi;
    }

    if (this.localStartCh === NaN) {
      this.walked_ch = 0;
    } else {
      this.walked_ch = this.localStartCh;
    }

    if (this.localStartJs === NaN) {
      this.walked_js = 0;
    } else {
      this.walked_js = this.localStartJs;
    }

    if (this.localStartGi === NaN) {
      this.walked_gi = 0;
    } else {
      this.walked_gi = this.localStartGi;
    }
  }

  walkedLinkSi() {
    this.localStartSi = ++this.walked_si;
    window.localStorage.setItem('si', this.localStartSi.toString());

  }

  walkedLinkCh() {
    this.localStartCh = ++this.walked_ch;
    window.localStorage.setItem('ch', this.localStartCh.toString());

  }
  walkedLinkJs() {
    this.localStartJs = ++this.walked_js;
    window.localStorage.setItem('js', this.localStartJs.toString());

  }

  walkedLinkGi() {
    this.localStartGi = ++this.walked_gi;
    window.localStorage.setItem('gi', this.localStartGi.toString());

  }
}
