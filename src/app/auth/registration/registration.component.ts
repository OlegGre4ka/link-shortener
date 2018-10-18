import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { UsersService } from '../../shared/services/users.service';
import { User } from '../../shared/models/user.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'inst-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrForm: FormGroup;
  constructor(private userService: UsersService, private router: Router , private modalService: NgbModal) { }
  openWindowCustomClass(modal) {
    this.modalService.open(modal, { windowClass: 'dark-modal' });
  }

  ngOnInit() {
    this.registrForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email], [this.confirmEmails.bind(this)]),
      'pass': new FormControl('', [Validators.required, Validators.minLength(6)]),
      'name': new FormControl('', [Validators.required]),
      'agree': new FormControl(false, [Validators.requiredTrue]),
    });

  }
  // Асинхронный валидатор можна создать через Promise
  // confirmEmails(control: FormControl): Promise<ValidationErrors | null> {
  //   return new Promise((resolve, reject) =>
  //     this.userService.getUserByEmail(control.value).subscribe(
  //       (user: User) => {
  //         if (user) {
  //           resolve({ 'existEmail': true });
  //         } else {
  //           resolve(null);
  //         }
  //       }));

  // }
  // а также через Observable, control может быть как типа FormControl, так и AbstractControl.
  // FormControl extends AbstractControl
  confirmEmails(control: AbstractControl): Observable<ValidationErrors | null> {
    return new Observable(observer =>
      this.userService.getUserByEmail(control.value).subscribe(
        (user: User) => {
          if (user) {
            observer.next({ 'existEmail': true });
            observer.complete();
          } else {
            observer.next(null);
            observer.complete();
          }
        }));

  }


  submitRegistrForm() {
    console.log(this.registrForm, 'registrForm for Post-request');
    const { email, pass, name } = this.registrForm.value;
    const user = new User(email, pass, name);
    this.userService.createNewUser(user).subscribe(
      // tslint:disable-next-line:no-unused-expression
      // tslint:disable-next-line:no-shadowed-variable
      (user: User) => {
        console.log(user, 'POST-User');
        this.router.navigate(['/login'], { queryParams: { nowCanLoggin: true } });
      }
    );
  }
}
