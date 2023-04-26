import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ZchatNewUser, ZchatUserCredentials, ZchatUserDetails, ZchatUserLoginCredentials } from "src/app/auth/models/zchat-user";

@Injectable({providedIn: 'root'})
export class ApiConnector{
    baseUrl = 'http://localhost:4000'
    constructor(private httpClient: HttpClient){}

   /* register(newUser: ZchatNewUser): Observable<ZchatUserDetails> {
        return this.httpClient.post<ZchatUserDetails>(`${this.baseUrl}/auth/register`, newUser);
    }

    login(userCredentials: ZchatUserCredentials): Observable<ZchatCredentials> {
        return this.httpClient.post<ZchatCredentials>(`${this.baseUrl}/auth/login`, userCredentials);
    }*/

    register(newUser: ZchatNewUser): Observable<ZchatUserDetails> {
        return this.httpClient.post<ZchatUserDetails>(`${this.baseUrl}/auth/register`, newUser);
    }

    login(userLoginCredentials: ZchatUserLoginCredentials): Observable<ZchatUserCredentials> {
        return this.httpClient.post<ZchatUserCredentials>(`${this.baseUrl}/auth/login`, userLoginCredentials);
    }
}