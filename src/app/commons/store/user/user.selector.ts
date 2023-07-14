import { createFeatureSelector } from '@ngrx/store';
import { User } from './user.reducer';
 
export const selectUser = createFeatureSelector<User[]>('myuser');