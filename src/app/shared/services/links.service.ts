import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { Link } from '../models/Link.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  constructor(private http: HttpClient) { }
  createNewLink(link: Link): Observable<any> {
    return this.http.post(`http://localhost:3000/links`, link);
  }

  getLinks(): Observable<any> {
    return this.http.get(`http://localhost:3000/links`);

  }

}
