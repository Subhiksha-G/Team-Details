// Used props to get properties from parent component(Team.jsx)

function EmployeeCard(props) {
    return(
        <>
        <p> Username : {props.name}</p>
        <p>Role : {props.role}</p>
        <p>Status : {props.isOnline ? "Online" : "Offline"}</p>
        <button onClick={() => props.onPing(props.name)}>Ping {props.name}</button>
        <button onClick={props.onToggle}>Toggle Status</button>
        </>
    );
}

export default EmployeeCard;