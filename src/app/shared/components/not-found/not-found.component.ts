import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'inst-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  error_404 = true;
  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(
      () => {
this. router.navigate(['/login']);
      }, 5000
    );
}
}
