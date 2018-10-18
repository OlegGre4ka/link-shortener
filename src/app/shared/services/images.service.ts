import { Observable, pipe, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  //  images: number[] = [1, 2, 3, 4, 5];

  constructor(private http: HttpClient) { }
//   getImages(images): Observable<any> {
//     return this.http.get( `https://picsum.photos/1340/500?random&t=${Math.random()}`)
//     .pipe(
// this.images = images
//     );
// // images.of(1, 2, 3 , 4 , 5)
// //   }
// }
}
