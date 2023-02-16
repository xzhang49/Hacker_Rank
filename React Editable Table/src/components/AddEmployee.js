import React, { Fragment, useState } from "react";

const AddEmployee = ({ handleAdd }) => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState("");
  return (
    <Fragment>
      <td className="pl-30">
        <input
          data-testid="new-employee-name-input"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </td>
      <td className="pl-20">
        <input
          data-testid="new-employee-position-input"
          placeholder="Enter Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
      </td>
      <td className="pl-20">
        <input
          data-testid="new-employee-salary-input"
          type="number"
          placeholder="Enter Salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
      </td>
      <td className="pl-20">
        <button
          data-testid="add-new-employee-button"
          className="x-small w-75 ma-0 px-25"
          disabled={!(salary && name && position)}
          onClick={() => {
            handleAdd({
              id: 4,
              name: name,
              position: position,
              salary: salary,
            });
            setName("");
            setPosition("");
            setSalary("");
          }}
        >
          Add
        </button>
      </td>
    </Fragment>
  );
};

export default AddEmployee;
