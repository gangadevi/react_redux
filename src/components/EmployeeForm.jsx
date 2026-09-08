import { useDispatch } from "react-redux";
import { addEmployee, updateEmployee } from "../features/employees/employeeSlice";
import { useState } from "react";

function EmployeeForm({formData,setFormData,editing,setEditing}){

    const dispatch = useDispatch()

    const [error,setError] = useState({})

    const validateForm = () => {
         const newErrors = {}

        if(!formData.name){
            newErrors.name = "Name is required"
        }
        if(!formData.department){
            newErrors.department = "Deparment is required"
        }
        
        if(!formData.salary){
            newErrors.salary = "Salary is required"
        }

        if(Object.keys(newErrors).length > 0){
            setError(newErrors)
            return
        }

        setError({})
        return true 

    }
 
    const handleSubmit = () => {

        if(!validateForm()){
            return
        }

        dispatch(addEmployee({
            id: Date.now(),
            name:formData.name,
            department:formData.department,
            salary:Number(formData.salary)
        }))
        setFormData({
            name:"",
            department:"",
            salary:""
        })
    }
        const handleChange = (e) => {
            const {name,value} = e.target;
            setFormData(prev => ({
                ...prev,
                [name]:value
            }))
            setError(prev => ({
                ...prev,
                [name]:""
            }))
        }

        const handleUpdate = () => {
            if(!validateForm()){
                return
            }
            dispatch(updateEmployee({
                id:editing.id,
                name : formData.name,
                department:formData.department,
                salary:formData.salary
            }))
            setEditing(null)

            setFormData({
                name: "",
                department: "",
                salary: ""
            })
        }

        const handleCancel = () => {
            setEditing(null)

            setFormData({
                name: "",
                department: "",
                salary: ""
            })
        }
    

    return (
            <div className="card">
                <div className="card-header bg-secondary text-white fw-bold">
                    Employee Form
                </div>
                <div className="card-body">
                    {/* <h5 class="card-title"></h5> */}
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="form-control" placeholder="Name" />
                        {error.name && <div className="text-danger">{error.name}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="department" className="form-label">Department</label>
                        <input type="text" id="department" name="department" value={formData.department} onChange={handleChange} className="form-control" placeholder="Department" />
                        {error.department && <div className="text-danger">{error.department}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="salary" className="form-label">Salary</label>
                        <input type="text" id="salary" name="salary" value={formData.salary} onChange={handleChange} className="form-control" placeholder="Salary" />
                        {error.salary && <div className="text-danger">{error.salary}</div>}
                    </div>
                    <div className="mb-3">
                       {  
                            editing === null ? <button className="btn btn-primary fw-bold" onClick={handleSubmit}>Add Employee</button> 
                                             : <div className="d-flex gap-3">
                                                <button className="btn btn-success fw-bold" onClick={handleUpdate}>Update Employee</button> 
                                                <button className="btn btn-warning fw-bold" onClick={handleCancel}>Cancel Edit</button>
                                            </div>
                        }
                    </div>
                </div>
            </div>
    )
}

export default EmployeeForm;