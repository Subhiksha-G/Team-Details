import API from "./components/API-Fetching/API";
import CounterUseEffect from "./components/CounterApp/Counter-useEffect";
import Stopwatch from "./components/Stopwatch/Stopwatch-Time";
import Team from "./components/Team-Directory/Team";
import Todo from "./components/TodoApp/Todo-useEffect";
import Dashboard from "./components/UserDashboard/Dashboard";

function App() {
  return (
    <>
      {/* <Team />
      <CounterUseEffect />
      <Todo />
      <Dashboard />
      <Stopwatch /> */}
      <API />
    </>
  );
}

export default App;
