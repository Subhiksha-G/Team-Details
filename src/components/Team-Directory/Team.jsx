import { useState } from "react";
import EmployeeCard from "../Team-Directory/EmployeeCard";

//import EmployeeCard from "../Team-Directory/EmployeeCard";

const employeeData = [
  { id: 1, name: "Subhiksha", role: "Trainee", isOnline: true },
  { id: 2, name: "Rubhiksha", role: "Developer", isOnline: false },
  { id: 3, name: "Pradhiksha", role: "Mentor", isOnline: true },
];

function Team() {
  const [employees, setEmployees] = useState(employeeData); //useState hook

  // rendering array lists using map function
  const handleToggleStatus = (id) => {
    setEmployees(
      employees.map(emp =>
        emp.id === id ? { ...emp, isOnline: !emp.isOnline } : emp  //conditional rendering
    ));
  };
  const handlePing = (name) => {
    alert(`Pinging ${name}`);
  };

  return (
    <>
      <h1>Team Details</h1>
      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          name={employee.name}
          role={employee.role}
          isOnline={employee.isOnline}
          onPing={handlePing}
          onToggle={() => handleToggleStatus(employee.id)}
        />
      ))}
    </>
  );
}

export default Team;
