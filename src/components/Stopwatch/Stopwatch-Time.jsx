import { useEffect, useState } from "react";

export default function Stopwatch() {
  const [time, setTime] = useState(0); // Total milliseconds
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let intervalTime = null;

    if (isActive) {
      // 10ms intervalTime for precision
      intervalTime = setInterval(() => {
        setTime((previousTime) => previousTime + 10);
      }, 10);
    } else {
      clearInterval(intervalTime);
    }

    return () => clearInterval(intervalTime);
  }, [isActive]);

  
  const loadedTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);

    return `${minutes.toString().padStart(2, "0")}m : ${seconds.toString().padStart(2, "0")}s : ${milliseconds.toString().padStart(2, "0")}ms`;
  };
  return (
    <>
      <h1>Stopwatch</h1>
      <h3>{loadedTime(time)}</h3>
      <button onClick={() => setIsActive(!isActive)}>
        {isActive ? "Stop" : "Start"}
      </button>
      <button
        onClick={() => {
          setIsActive(false);
          setTime(0);
        }}
      >
        Reset
      </button>
    </>
  );
}
