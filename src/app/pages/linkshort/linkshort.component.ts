import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ImagesService } from 'src/app/shared/services/images.service';
import { Link } from 'src/app/shared/models/Link.model';
import { LinksService } from 'src/app/shared/services/links.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'inst-linkshort',
    templateUrl: './linkshort.component.html',
    styleUrls: ['./linkshort.component.scss']
})
export class LinkshortComponent implements OnInit, OnDestroy {
    renderedSpinner = true;
    images;

    short_link;
    long_link;
    description;
    longLink;
    links = {};
    formData = [];
    // count = 0;
    cut = 0;
    localStart = +window.localStorage.getItem('cuted');

    param = {};
    // переменные для проверки входящего URL на совпадение, и вывод укороченной ссылки
    longUrlTrue = false;
    compare;
    longUrl;
    shortUrl;

    subscription: Subscription;
    @ViewChild('form') form: NgForm;
    // @ViewChild('shortUrl') shortUrl: ElementRef;
    constructor(private imagesService: ImagesService, private router: Router, private linkService: LinksService) { }

    ngOnInit() {
        if (this.localStart === NaN) {
            this.param = { cuted: this.cut };
        } else {
            this.param = { cuted: this.localStart };

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
        this.description = this.form.value.description;
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
            description: this.description,
        };
        this.formData.push(this.links);

        this.form.reset();

        this.linkToServer();
        this.counterMath();
    }
    // счётчик, установка данных в localStorage
    counterMath() {
        this.param = { cuted: ++this.localStart };
        window.localStorage.setItem('cuted', this.localStart.toString());
    }
    // создание нового обЪекта Link на сервере
    linkToServer() {
        console.log(this.description, 'description Link');
        const link = new Link(this.long_link, this.short_link, this.description);
        this.linkService.createNewLink(link).subscribe(
            // tslint:disable-next-line:no-shadowed-variable
            (link: Link) => {
                console.log(link, 'POST-Link');
            }
        );
    }
    // проверка на совпадение входязей ссылки - long_link
    CompareLongLink() {
      this.subscription = this.linkService.getLinks().subscribe((links) => {
            console.log(links, ' GET -link from localhost:3000');
            links.map(link => {
                this.compare = link.longUrl.indexOf(this.form.value.url.trim()) !== -1;
                if (this.compare === true) {
                    this.longUrlTrue = true;
                    this.longUrl = link.longUrl;
                    this.shortUrl = link.shortUrl;
                    setTimeout(() => {
                        this.longUrlTrue = false;
                        this.form.reset();
                    }, 8000);
                }
                console.log(this.compare, this.longUrl, this.shortUrl, 'compare-longUrl-shortUrl');


                // window.localStorage.setItem('link', JSON.stringify(link.longUrl));

                // this.authServise.login();
                //   } else {
                // this.showMessage({ text: 'Неправильный пароль!Введите правильный пароль или зарегистрируйтесь!', type: 'danger' });
            });
            // });
        });
    }
    ngOnDestroy() {
        if ( this.subscription) {
          this.subscription.unsubscribe();
        }
    }
}
