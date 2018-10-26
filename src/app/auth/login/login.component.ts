import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UsersService } from '../../shared/services/users.service';
import { User } from '../../shared/models/user.model';
import { Message } from '../../shared/models/message.model';
import { AuthService } from '../../shared/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'inst-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  message: Message;
  subscription: Subscription;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private usersService: UsersService,
    private authServise: AuthService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'pass': new FormControl('', [Validators.required, Validators.minLength(6)])
    });
    // инициализировать екземпляр класса нужно до подписки на  this.route.queryParams.subscribe иначе не сработает,
    // его просто не будет еще физичеки
    this.message = new Message('danger', '');
    this.route.queryParams.subscribe(
      (params: Params) => {
        if (params['nowCanLoggin']) {
          this.showMessage({ text: 'Hello! Теперь вы можете войти в систему!', type: 'success' });
        } else if (params['accessForAdmin']) {
          this.showMessage({ text: 'Эта страница доступна только администраторам!Введите пароль администротора!', type: 'warning' });
        }
        // else (params['accessOpen']){}
      }
    );
  }

  private showMessage(message: Message) {
    this.message = message;
    setTimeout(() => {
      this.message.text = '';
    }, 8000);
  }

  submitLoginForm() {
    const formData = this.loginForm.value;
    console.log(formData, 'this.loginForm.value');
    console.log(formData.email, 'this.loginForm.value');
    this.authServise.setFormData(formData.email) ;

   this.subscription = this.usersService.getUserByEmail(formData.email).subscribe((user: User) => {
      console.log(user, ' GET -user from localhost:3000');
      if (user) {
        if (user.pass === formData.pass) {
          window.localStorage.setItem('user', JSON.stringify(user));
          this.authServise.login();

          this.router.navigate(['/linkshort']);
        } else {
          this.showMessage({ text: 'Неправильный пароль!Введите правильный пароль или зарегистрируйтесь!', type: 'danger' });
        }
      } else {
        // tslint:disable-next-line:max-line-length
        this.showMessage({ text: 'Такого пользователя не существует!Проверьте правильность введённых данных или зарегистрируйтесь!', type: 'danger' });
      }
    });
    this.loginForm.reset();
  }

  ngOnDestroy() {
    if ( this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
