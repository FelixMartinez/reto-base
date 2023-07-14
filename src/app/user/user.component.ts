import { Component, HostListener, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectUser } from '../commons/store/user/user.selector';
import { invokeUserAPI } from '../commons/store/user/user.action';

interface AppState {
  message: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {
  message = '';
  users$ = this.store.pipe(select(selectUser));

  constructor(private store: Store<AppState>) {
    this.store.select('message').subscribe((message: string) => {
      console.log('message: ', message);
      this.message = message;
    });
  }

  @HostListener('window:message', ['$event'])
  onMessage(event: MessageEvent) {
    if (event.origin === 'http://localhost:3333') {
      // Realiza acciones necesarias en el proyecto base
      console.log('Mensaje recibido desde el microfrontend:', event);
      this.message = event.data;
    }
  }

  ngOnInit(): void {
    this.store.dispatch(invokeUserAPI());
    this.users$.subscribe(user => console.log(user));
  }

  handleEvent(event: CustomEvent) {
    console.log('Evento recibido:', event.detail);
    // Realiza acciones necesarias en el proyecto base
    alert(event.detail)
  }
}
