// event.service.ts

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../store/user/user.reducer';

@Injectable({ providedIn: 'root' })
export class EventService {
  private userSelectedSubject = new Subject<User>();

  userSelected$ = this.userSelectedSubject.asObservable();

  selectUser(user: User) {
    this.userSelectedSubject.next(user);
  }
}
