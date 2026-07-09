import CounterUseEffect from "./components/CounterApp/Counter-useEffect";
import Team from "./components/Team-Directory/Team";
import Todo from "./components/TodoApp/Todo-useEffect";
import Dashboard from "./components/UserDashboard/Dashboard";

function App() {
  return (
    <>
      <Team />
      <CounterUseEffect />
      <Todo />
      <Dashboard />
    </>
  );
}

export default App;
