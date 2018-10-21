import { Component, OnInit, ElementRef, ViewChild, Renderer2, ViewChildren, Input, QueryList, AfterViewInit } from '@angular/core';
import { LinksService } from 'src/app/shared/services/links.service';
import { Link } from 'src/app/shared/models/Link.model';

@Component({
  selector: 'inst-list-short',
  templateUrl: './list-short.component.html',
  styleUrls: ['./list-short.component.scss']
})
export class ListShortComponent implements OnInit {
  // , AfterViewInit
  shorts: Link;

  @ViewChild('shortUrl') shortUrl: ElementRef;
  // @ViewChildren('shortUrl') shortUrl: QueryList<string>;


  count = 0;
  // localStart = +window.localStorage.getItem(this.shortUrl.nativeElement.textContent );
  constructor(private linksService: LinksService, private _renderer: Renderer2) { }

  ngOnInit() {
    this.linksService.getLinks()
      .subscribe(
        (links) => links.map(() =>
        this.shorts = links
        ),
        err => {
          console.log('error');
        }
        );
        // сч'тчик на динамических елементах
      //   if (this.localStart === NaN) {
      //               this.count = 0;
      // } else {
      // this.count = this.localStart;

      // }
  }

  // ngAfterViewInit() {
  //   this.shortUrl.forEach(url => console.log(url, 'url-from QueryList'));
  // }
  counter() {
    ++this.count;
    // this.shortUrl.nativeElement.ElementRef.textContent = 'Rusya';
    // this.shortUrl.nativeElement.textContent = this.count.toString();

// window.localStorage.setItem(this.shortUrl.nativeElement.textContent, this.count.toString());
console.log(this.shortUrl , '@ViewChild, QueryList');
  }
}
