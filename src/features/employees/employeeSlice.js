import { createSlice } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
    name:'employee',
    initialState:[],
    reducers:{
        addEmployee : (state,action) => {
            state.push(action.payload)
        },
        deleteEmployee : (state, action) => {
            const id = action.payload;
            return state.filter(employee => employee.id !== id)
        },
        updateEmployee : (state,action) => {

            const employee = state.find(employee => employee.id === action.payload.id)

            employee.name = action.payload.name
            employee.department = action.payload.department
            employee.salary = action.payload.salary

        }
    }
})

export const { addEmployee, deleteEmployee, updateEmployee }  = employeeSlice.actions;

export default employeeSlice.reducer;