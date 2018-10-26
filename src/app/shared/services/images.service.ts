import { Observable, pipe, of } from 'rxjs';
import { take } from 'rxjs/operators';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
   images$: any ;
  constructor(private http: HttpClient) { }
  // getImages(): Observable<any> {
  //   return this.http.get( `https://picsum.photos/1340/500?random&t=${Math.random()}`);
    // return this.http.get( `https://picsum.photos/1340/500?random`)

//     .pipe(
// // this.images = images
// take(5)
//     );
// }
}
