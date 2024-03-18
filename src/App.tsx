import { Link } from "react-router-dom";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { CounterIncremenAction, CounterSelector } from "./store/counterSlice";

function App() {
  const counter = useSelector(CounterSelector);
  const dispatch = useDispatch();

  return (
    <div>
      <Link to="/users">Users</Link>
      <button
        onClick={() => {
          dispatch(CounterIncremenAction());
        }}
      >
        Increment {counter}
      </button>
    </div>
  );
}

export default App;
