import { Directive, OnInit, ElementRef, Renderer2} from '@angular/core';
import { LinksService } from '../services/links.service';
import { HttpClient } from '@angular/common/http';

@Directive({

  selector: '[instCounter]',
  exportAs: 'asCounter'

})
export class CounterDirective implements OnInit {
  count = 0;
  content;
  localStart;
  shortUrl;
  countVallue ;
  newCount = {};
  constructor(private element: ElementRef, private renderer: Renderer2, private linkService: LinksService, private http: HttpClient) { }
  ngOnInit() {

    console.log(this.element, 'CounterDirective');
  }

  counter(id: number) {
    this.content = this.element.nativeElement.childNodes[3].textContent;
    ++this.content;
    this.renderer.setProperty( this.element.nativeElement.childNodes[3], 'textContent', this.content);
    this.countVallue = this.element.nativeElement.childNodes[3].textContent;

    console.log(this.countVallue);
    this.linkService.updateLinkCount(id, +this.countVallue)
    .subscribe(
      data => {
        console.log('PATCH Request is successful ', data);
    },
    error => {
        console.log('Error', error);
    }
    );
  }

}
