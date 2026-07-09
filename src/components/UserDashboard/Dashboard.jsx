import { useState, useEffect } from "react";

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [seconds, setSeconds] = useState(0);
  const [status, setStatus] = useState("Active");
  const [activities, setActivities] = useState([
    "Logged in",
    "Updated Profile",
  ]);

  let greeting;
  status === "Active"
    ? (greeting = <h1>Hi Subhiksha, Welcome Back!</h1>)
    : (greeting = <h1>See you next time!</h1>);

  // 1. Loading Text Challenge: Using setTimeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer); // Cleanup for timeout
  }, []);

  // 2. Timer Challenge: Using setInterval + Cleanup
  useEffect(() => {
    if (!isLoading) {
      const interval = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
      return () => clearInterval(interval); // Essential Cleanup
    }
  }, [isLoading]); // Runs only when loading finishes

  if (isLoading) return <h1>Loading your dashboard...</h1>;

  const addActivities = () => setActivities(["Logged In", "Updated Profile"]);

  const clearActivities = () => setActivities([]);

  return (
    <>
        <h1>Conditional Rendering, useEffect(setTimeout, setInterval, Countdown Timer, Loading Text for 3 seconds) </h1>
        <div
        style={{ border: `5px solid ${status === "Active" ? "green" : "grey"}` }}
        >
            <h1>Dashboard</h1>
            {greeting}
            <p>Session Duration: {seconds} seconds</p>
            <p>Status : {status}</p>

            {/* Rest of your conditional rendering (Ternary, &&, ||, List) */}
            <button
                onClick={() => setStatus(status === "Active" ? "Offline" : "Active")}
            >
                Toggle Status
            </button>
            <div>
                <p>Activities :</p>
                {activities.length > 0 ? (
                    <>
                        <ul>
                            {activities.map((activity, index) => (
                            <li key={index}>{activity}</li>
                            ))}
                        </ul>
                        <button onClick={clearActivities}>Delete Activities</button>
                    </>
                ) : (
                    <>
                        <p>No recent activity found.</p>
                        <button onClick={addActivities}>Add Activities</button>
                    </>
                )}
            </div>
        </div>
    </>
  );
}
