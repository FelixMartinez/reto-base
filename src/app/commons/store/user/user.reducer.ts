
import { createReducer, on } from "@ngrx/store";
import { userFetchAPISuccess } from "./user.action";
 
export interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
}

export const initialState: ReadonlyArray<User> = [];
 
export const userReducer = createReducer(
    initialState,
    on(userFetchAPISuccess, (state, { allUser }) => {
      return allUser;
    })
);