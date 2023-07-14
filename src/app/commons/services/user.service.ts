import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../store/user/user.reducer';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<User[]>('http://localhost:3000/users');
  }
}
