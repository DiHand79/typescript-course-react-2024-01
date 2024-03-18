import { Link } from "react-router-dom";
import "./App.css";
import { useSelector } from "react-redux";
import { incrementAction, CounterSelector } from "./store/counterSlice";
import { useAppDispatch } from "./store";

function App() {
  const counter = useSelector(CounterSelector);
  const dispatch = useAppDispatch();

  return (
    <div>
      <Link to="/users">Users</Link>
      <button
        onClick={() => {
          dispatch(incrementAction());
        }}
      >
        Increment {counter}
      </button>
    </div>
  );
}

export default App;
