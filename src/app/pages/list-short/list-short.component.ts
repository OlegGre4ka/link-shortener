import { Component, OnInit, ElementRef, ViewChild, Renderer2, ViewChildren, Input, QueryList, AfterViewInit } from '@angular/core';
import { LinksService } from 'src/app/shared/services/links.service';
import { Link } from 'src/app/shared/models/Link.model';

@Component({
  selector: 'inst-list-short',
  templateUrl: './list-short.component.html',
  styleUrls: ['./list-short.component.scss']
})
export class ListShortComponent implements OnInit {
  shorts: Link;

  @ViewChild('shortUrl') shortUrl: ElementRef;

  count = 0;
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

  }

}
