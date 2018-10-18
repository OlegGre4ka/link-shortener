import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'inst-summury',
  templateUrl: './summury.component.html',
  styleUrls: ['./summury.component.scss']
})
export class SummuryComponent implements OnInit {
  // tslint:disable-next-line:no-unused-expression
  walked_si = 0;
  walked_ch = 0;
  walked_js = 0;
  walked_gi = 0;
  constructor() { }

  ngOnInit() {}

walkedLinkSi() {
  ++this.walked_si;

}

walkedLinkCh() {
  ++this.walked_ch;

}
walkedLinkJs() {
  ++this.walked_js;
}

walkedLinkGi()  {
  ++this.walked_gi;
}
}
