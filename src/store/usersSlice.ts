import { IState } from ".";
import { getUsers } from "../api";
import { IUser } from "../types";

interface IUsersAction {
  type: string;
  payload?: IUser[];
}

export function usersReducer(state = [], action: IUsersAction) {
  console.log("action", action);

  switch (action.type) {
    case "users/set":
      return action.payload;

    default:
      return state;
  }
}

export function FetchUsersAction() {
  return async (dispatch: any) => {
    const data: IUser[] = await getUsers();

    dispatch(UsersSetAction(data));
  };
}

export function UsersSetAction(users: IUser[]) {
  return { type: "users/set", payload: users };
}

export function UsersSelector(state: IState) {
  return state.users;
}
