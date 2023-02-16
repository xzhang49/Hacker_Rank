import React, { Fragment, useState } from 'react'

const Employee = ({idx, salaryx, namex, positionx}) => {
  const [editable, setEditable] = useState(false)
  const [savable, setSavable] = useState(true)
  const [salary, setSalary] = useState(salaryx)
  const [salaryOnboard, setSalaryOnboard] = useState(salaryx)

  return (
    <Fragment>
      <td>{namex}</td>
      <td className='pl-20'>{positionx}</td>
      <td className='pl-20'>
      {
        !editable && <div
          data-testid={'employee-salary-div-' + idx}
          onClick={
            () => {
              setEditable(true)
            }
          }
        >
          {
            salaryOnboard ? salaryOnboard : "Salary Example"
          }
        </div>
      }
      
      {/* use this block of code when the salary field becomes editable */}
      {
        editable && <input
          data-testid={ 'employee-salary-input-' + idx }
          type='number'
          value={salary}
          onChange={
            (e) => {
              setSalary(e.target.value)
            }
          }
        />
      }
      </td>
      <td className='pl-20'>
        <button
          className={ 'x-small w-75 ma-0 px-25' }
          data-testid={ 'employee-save-button-' + idx }
          disabled={!editable || salary=="70000"}
          onClick={
            () => {
              setEditable(false)
              setSalaryOnboard(salary)
            }
          }
        >
          Save
        </button>
      </td>
    </Fragment>
  )
}


export default Employee
