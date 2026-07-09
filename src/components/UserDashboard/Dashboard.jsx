import { useState } from "react";

export default function Dashboard() {
  const [status, setStatus] = useState("Active");
  const [isVerified, setIsVerified] = useState(true);
  const [bio, setBio] = useState("This is user dashboard");
  const [activities, setActivities] = useState([
    "Logged In",
    "Updated Profile",
  ]);
  let greeting;
  status === "Active"
    ? (greeting = <h1>Welcome Back!</h1>)
    : (greeting = <h1>See you next time!</h1>);
  return (
    <>
      <h1>Conditional Rendering</h1>
      <div
        style={{
          border: `5px solid ${status === "Active" ? "green" : "grey"}`,
        }}
      >
        {greeting}
        {isVerified && <span>✅Verified User</span>}
        <p>Status : {status}</p>
        <p>Bio : {bio || "No bio provided"}</p>
        <p>
          Activities :
          {activities.length > 0 ? (
            <ul>
              {activities.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>
          ) : (
            <p>No recent activity found.</p>
          )}
        </p>
      </div>
    </>
  );
}
