
import { useSelector,useDispatch } from "react-redux";
import { deleteEmployee } from "../features/employees/employeeSlice"

function EmployeeList({setEditing,setFormData}){

   const employees = useSelector(state => state.employee)

    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteEmployee(id))
    }

    const handleEdit = (employee) => {
        setEditing(employee)
        setFormData({
            name:employee.name,
            department:employee.department,
            salary:employee.salary
        })
    }

    return (
        <div className="my-5 bg-secondary-subtle p-3">
            <h2 className="fw-bold">Employee List</h2>
            <table className="table table-Secondary">
                <thead >
                     <tr>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Salary</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        employees.length === 0 ? (
                             <tr>
                                <td colSpan="4">No Employees</td>
                            </tr>
                        ) :
                       ( employees.map(employee => {
                            return <tr key={employee.id}>
                                        <td>{employee.name}</td>
                                        <td> {employee.department}</td>
                                        <td> {employee.salary} </td>
                                        <td>
                                            <div className="d-flex-wrap">
                                                <button className="btn btn-danger fw-bold" onClick={() => handleDelete(employee.id)} >Delete</button>
                                                <button className="btn btn-info fw-bold" onClick={() => handleEdit(employee)} >Edit</button>
                                            </div>
                                        </td>
                                    </tr>
                        })
                    )
                }
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeList;