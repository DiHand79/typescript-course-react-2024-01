import { AppDispatch, RootState } from ".";
import { getUsers } from "../api";
import { IUser } from "../types";

interface IUsersAction {
  type: string;
  payload?: IUser[];
}

export function usersReducer(state: IUser[] = [], action: IUsersAction) {
  console.log("action", action);

  switch (action.type) {
    case "users/set":
      return action.payload;

    default:
      return state;
  }
}

export function FetchUsersAction() {
  return async (dispatch: AppDispatch) => {
    const data: IUser[] = await getUsers();

    dispatch(UsersSetAction(data));
  };
}

export function UsersSetAction(users: IUser[]) {
  return { type: "users/set", payload: users };
}

export function UsersSelector(state: RootState) {
  return state.users;
}
