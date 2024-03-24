import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { IUserDto } from '../../core/models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _user: IUserDto | undefined;

  constructor(private userService: UserService, private router: Router) {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this._user = JSON.parse(storedUser);
    }
  }

  public login(email: string, password: string): void {
    const userExist = this.userService.getUserByEmail(email);

    if (userExist && userExist.password === password) {
      this._user = userExist;
      localStorage.setItem('currentUser', JSON.stringify(email));
    } else {
      throw new Error("Utilisateur ou mot de passe incorrect");
    }
  }

  public logout(): void {
    this._user = undefined;
    this.router.navigateByUrl('/login');
    localStorage.removeItem('currentUser');
  }

  public get isLoggedIn(): boolean {
    return this._user !== undefined;
  }

  public get userLoggedFullName(): string | undefined {
    return this._user ? this._user?.firstname + ' ' + this._user?.lastname : undefined;
  }
}
