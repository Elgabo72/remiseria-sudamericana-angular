import { Injectable } from '@angular/core';
import { User } from 'src/app/infraestructure/remiseriaApi/models';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    nameJWT = 'jwt';
    nameCLient = 'user';
    constructor() { }

    saveJWT(jwt: string, user: User): void {
        if (this.getJWT()) {
            localStorage.removeItem(this.nameJWT);
            localStorage.removeItem(this.nameCLient);
            localStorage.setItem(this.nameJWT, jwt);
            localStorage.setItem(this.nameCLient, JSON.stringify(user));
        }
        localStorage.setItem(this.nameJWT, jwt);
        localStorage.setItem(this.nameCLient, JSON.stringify(user));
    }

    getJWT(): string | null {
        return localStorage.getItem(this.nameJWT);
    }
    getUser(): User {
        return JSON.parse(localStorage.getItem(this.nameCLient)!);
    }

    isLogged(): boolean {
        return this.getJWT() ? true : false;
    }

    logout(): void {
        localStorage.removeItem(this.nameJWT);
        localStorage.removeItem(this.nameCLient);
    }
    saveUser(user: User): void {
        localStorage.removeItem(this.nameCLient);
        localStorage.setItem(this.nameCLient, JSON.stringify(user));
    }
}
