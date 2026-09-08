
import { useState } from "react"
import './App.css'
import { Provider } from 'react-redux'
import store from './app/store'
import EmployeeForm from './components/EmployeeForm'
import EmployeeList from './components/EmployeeList'

function App() {

  const [formData, setFormData] = useState({
    name: "",
    department:"",
    salary:""
  })
 
  const [editing, setEditing] = useState(null);

  return (
    <>
    <Provider store={store}>
      <div className='container my-3 w-50 mx-auto'>
          <h2 className='text-primary fw-bold text-center my-4'>Employee Management</h2>
          <EmployeeForm formData={formData} setFormData={setFormData} editing = {editing} setEditing = {setEditing}  />
          <EmployeeList setEditing={setEditing} setFormData={setFormData}/>
      </div>
    </Provider>
    </>
  )
}

export default App
