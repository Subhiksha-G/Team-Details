import { useEffect, useState } from "react";

export default function Stopwatch() {
  const [time, setTime] = useState(0); // Total milliseconds
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      // 10ms interval for precision
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  // Format helper: converts total ms into 00m:00s:00ms
  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);

    return `${minutes.toString().padStart(2, "0")}m : ${seconds.toString().padStart(2, "0")}s : ${milliseconds.toString().padStart(2, "0")}ms`;
  };
  return (
    <>
      <h1>Stopwatch</h1>
      <h3>{formatTime(time)}</h3>
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
