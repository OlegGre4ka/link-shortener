import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ImagesService } from 'src/app/shared/services/images.service';
import { TranslateService } from '@ngx-translate/core';

@Component ({
    selector: 'inst-linkshort',
    templateUrl: './linkshort.component.html',
    styleUrls: ['./linkshort.component.scss']
})
export class LinkshortComponent implements OnInit {
    renderedSpinner = true;
    images;

    short_link;
    long_link;
    longLink;
    links = {};
    formData = [];
    count = 0;
    cut = 0 ;
    localStart = +window.localStorage.getItem('cuted');

    param = {};

    @ViewChild('form') form: NgForm;
    @ViewChild('shortUrl') shortUrl: ElementRef;
    constructor(private imagesService: ImagesService, private translate: TranslateService) { }

    ngOnInit() {
        if (this.localStart === NaN) {
            this.param = {cuted : this.cut};
        } else {
            this.param = {cuted : this.localStart};

        }

//         this.imagesService.getImages().subscribe(
//             (images) => {
// console.log(images, 'Ловимо в сабскрайбі в лінкшорті');

//  this.images = [1, 2, 3 , 4 , 5].map(() => images);
//             }
//         );
 this.images = [1, 2, 3, 4, 5].map(() => `https://picsum.photos/1340/500?random&t=${Math.random()}`);
 this.renderedSpinner = false;
        }

    submitForm() {
        const https_www = 'https://www.';
        const https = 'https://';

        const cut_https_www = this.form.value.url.trim().substr(0, 12);
        const cut_https = this.form.value.url.trim().substr(0, 8);

        this.long_link = this.form.value.url;

        if (cut_https_www === https_www) {
            this.longLink = this.long_link.trim().slice(12, 14) + '.' + this.long_link.trim().slice(14, 16);
            this.short_link = this.longLink + '/' + (`${(Math.random())}`).slice(2, 6);
        } else if (cut_https === https) {
            this.longLink = this.long_link.trim().slice(8, 10) + '.' + this.long_link.trim().slice(10, 12);
            this.short_link = this.longLink + '/' + (`${(Math.random())}`).slice(2, 6);
        }

        this.links = {
            longUrl: this.long_link,
            shortUrl: this.short_link,
            description: this.form.value.description,
            count: this.count
        };
        this.formData.push(this.links);

        this.form.reset();
        this. counterMath();
    }
    counterMath() {
        this.param = {cuted : ++this.localStart};
      window.localStorage.setItem('cuted', this.localStart.toString());

// return this.param = {cuted: this.cut };
    }
}
