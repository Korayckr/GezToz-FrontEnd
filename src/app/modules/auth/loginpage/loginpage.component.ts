import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/core/models/request/login-request.model';
import { ResponseStatus } from 'src/core/models/response/base-response.model';
import { AuthService } from 'src/core/services/auth/auth.service';
import { RegisterRequest } from 'src/core/models/request/register-request.model';
import { ConfirmationService, MessageService } from 'primeng/api';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class LoginpageComponent implements OnInit {

  /*
  public loginRequest: LoginRequest = <LoginRequest>{};

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
  }


  async login() {
    //console.log("login dto", this.loginRequest);

    let status = await this.authService.login(this.loginRequest);

    if (status == ResponseStatus.Ok) {
      await this.router.navigate(['../profile']);
    } else if (status == ResponseStatus.Invalid)
      this.loginRequest.password = '';
  }*/

  public loginRequest: LoginRequest = <LoginRequest>{};
  public registerRequest: RegisterRequest = <RegisterRequest>{};
  

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private messageService: MessageService
  ) {}


  async login() {
    //console.log("login dto", this.loginRequest);

    let status = await this.authService.login(this.loginRequest);

    if (status == ResponseStatus.Ok) {
      await this.router.navigate(['../profile']);
    } else if (status == ResponseStatus.Invalid)
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Email veya şifre hatalı' });
      this.loginRequest.password = '';
  }

  async register() {
    let status = await this.authService.register(this.registerRequest);
    if (status == ResponseStatus.Ok) {
      this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: 'Kullanıcı başarılı bir şekilde eklendi', life: 3000 });
      await this.router.navigate(['../login']);
    } else if (status == ResponseStatus.Invalid)
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Kullanıcı oluşturulamadı' });
      this.registerRequest.Password = '';
  }

  ngOnInit() {
    const switchers: Element[] = Array.from(document.querySelectorAll('.switcher'));

    switchers.forEach((item: Element) => {
      item.addEventListener('click', function() {
        const parentElement = (item.parentElement as HTMLElement);
        switchers.forEach((el: Element) => el.parentElement!.classList.remove('is-active'));
        parentElement.classList.add('is-active');
      });
    });
  }
}
