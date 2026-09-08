import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "../features/employees/employeeSlice" 

const store = configureStore({
    reducer: {
        employee:employeeReducer
    }
})

export default store;