import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({providedIn: 'root'})
export class RouterService{
    constructor(private router: Router){}
    routeToLogin(): void {
        this.router.navigate(['auth','login']);
    }

    routeToRegister(): void {

    }

    routeToForgotPassword(): void {

    }

    routeToNotFound(): void {

    }

    routeToChats(): void {
        this.router.navigate(['zchat','chats']);
    }

    routeToStatus(): void {
        this.router.navigate(['zchat','status']);
    }
}