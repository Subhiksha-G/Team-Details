import API from "./components/API-Fetching/API";
import CounterUseEffect from "./components/CounterApp/Counter-useEffect";
import LoginForm from "./components/Forms/LoginForm";
import Home from "./components/Home/Home";
import Stopwatch from "./components/Stopwatch/Stopwatch-Time";
import Team from "./components/Team-Directory/Team";
import Todo from "./components/TodoApp/Todo-useEffect";
import Dashboard from "./components/UserDashboard/Dashboard";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/Home">Home</Link> | {" "}
        <Link to="/Team">Team</Link> | {" "}
        <Link to="/CounterUseEffect">CounterUseEffect</Link> | {" "}
        <Link to="/Todo">Todo</Link> | {" "}
        <Link to="/Dashboard">Dashboard</Link> | {" "}
        <Link to="/Stopwatch">Stopwatch</Link> | {" "}
        <Link to="/API">API</Link> | {" "}
        <Link to="/LoginForm">LoginForm</Link> | {" "}

      </nav>
      <Routes>
        <Route path="/Home" element={<Home />}/>
        <Route path="/Team" element={<Team />} />
        <Route path="/CounterUseEffect" element={<CounterUseEffect />} />
        <Route path="/Todo" element={<Todo />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Stopwatch" element={<Stopwatch />} />
        <Route path="/API" element={<API />} />
        <Route path="/LoginForm" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
