import { IState } from ".";

interface ICounterAction {
  type: string;
  payload?: number;
}

export function counterReducer(state = { value: 0 }, action: ICounterAction) {
  console.log("action", action);

  switch (action.type) {
    case "counter/incremented":
      return { value: state.value + 1 };
    case "counter/decremented":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

export function CounterIncremenAction() {
  return { type: "counter/incremented" };
}

export function CounterSelector(state: IState) {
  return state.counter.value;
}
