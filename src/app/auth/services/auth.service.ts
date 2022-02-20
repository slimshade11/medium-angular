import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { environment } from 'src/environments/environment';
import { AuthResponseInterface } from 'src/app/auth/types/authResponse.interface';
import { RegisterRequestInterface } from 'src/app/auth/types/registerRequest.interface';
import { LoginRequestInterface } from 'src/app/auth/types/loginRequest.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getUser(response: AuthResponseInterface): CurrentUserInterface {
    return response.user;
  }

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = this.baseUrl + '/users';

    return this.http.post<AuthResponseInterface>(url, data).pipe(map(this.getUser));
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    return this.http
      .post<AuthResponseInterface>(this.baseUrl + '/users/login', data)
      .pipe(map(this.getUser));
  }
}
