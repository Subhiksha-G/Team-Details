import { useRef, useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const inputRef = useRef(null);

  return (
    <>
      <h1>Hi</h1>
      <form>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <input ref={inputRef} />
        <button onClick={() => inputRef.current.focus()}>Focus Me!</button>
      </form>
    </>
  );
}

export default LoginForm;
