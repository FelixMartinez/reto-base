import { createAction, props } from '@ngrx/store';
import { User } from './user.reducer';
 
export const invokeUserAPI = createAction(
  '[User API] Invoke User Fetch API'
);
 
export const userFetchAPISuccess = createAction(
  '[User API] Fetch API Success',
  props<{ allUser: User[] }>()
);