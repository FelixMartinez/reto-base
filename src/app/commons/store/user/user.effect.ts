import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY, map, mergeMap, withLatestFrom } from 'rxjs';
import { UserService } from '../../services/user.service';
import { invokeUserAPI, userFetchAPISuccess } from './user.action';
import { selectUser } from './user.selector';
 
@Injectable()
export class UserEffect {
  constructor(
    private actions$: Actions,
    private userService: UserService,
    private store: Store
  ) {}
 
  loadAllUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(invokeUserAPI),
      withLatestFrom(this.store.pipe(select(selectUser))),
      mergeMap(([, userformStore]) => {
        if (userformStore.length > 0) {
          return EMPTY;
        }
        return this.userService
          .get()
          .pipe(map((data) => userFetchAPISuccess({ allUser: data })));
      })
    )
  );
}