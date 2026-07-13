import { useRef, useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState({
    username : "",
    email : ""
  });
  const inputRef = useRef(null);

  return (
    <div>
      <h1>Hi</h1>
      <form>
        <label>Username : </label>
        <input
          type="text"
          name="username"
          placeholder="Enter your name"
          onChange={(e) => setUsername(e.target.value)}
          value={username.username}
        />
        <label>Email ID : </label>
        <input
          type="email"
          name="email"
          placeholder="Enter your name"
          onChange={(e) => setUsername(e.target.value)}
          value={username.email}
        />
        <input ref={inputRef} />
        <button onClick={() => inputRef.current.focus()}>Focus Me!</button>
      </form>
    </div>
  );
}

export default LoginForm;
