import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiConnector } from 'src/app/shared/connectors/api.connector';
import { ZchatUserCredentials, ZchatUserLoginCredentials } from '../models/zchat-user';
import { RouterService } from 'src/app/shared/services/router.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiConnector: ApiConnector, private routerService: RouterService) { }

  isLoggedIn(): Observable<boolean> {
    return of(this.getToken != null);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }
  
  removeToken(): void {
    localStorage.removeItem('token');
  }

  getCurrentUser(): string | null {
    return localStorage.getItem('currentUser');
  }

  setCurrentUser(currentUser: string): void {
    localStorage.setItem('currentUser', currentUser);
  }

  removeCurrentUser(){
    localStorage.removeItem('currentUser');
  }

  login(userLoginCredentials: ZchatUserLoginCredentials): Observable<ZchatUserCredentials> {
    return this.apiConnector.login(userLoginCredentials)
  }

  logout(): void {
    this.removeToken();
    this.removeCurrentUser();
    this.routerService.routeToLogin();
  }
}
