import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { RouterService } from 'src/app/shared/services/router.service';

@Component({
  selector: 'zchat-login',
  templateUrl: './zchat-login.component.html'
})
export class ZchatLoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder, 
    private routerService: RouterService,
    private authService: AuthService) { }

  ngOnInit(): void {
    if(this.authService.isLoggedIn()){
      this.routerService.routeToChats();
    }
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value).subscribe({
        next: (userCredentials) => {
          this.authService.setToken(userCredentials.token);
          this.authService.setCurrentUser(JSON.stringify(userCredentials.user))
          this.routerService.routeToChats();
        },
        error: (msg) => {
            console.log('Error Getting Location: ', msg)
        }
      })
    }
  }
}
