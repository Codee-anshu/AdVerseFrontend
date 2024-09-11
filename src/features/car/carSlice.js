import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cars:["Model S", "Model Y","Model X","model 3", "solar panels","solar roof","powerwall"]
}

const carSlice= createSlice({
    name:"car",
    initialState,
    reducers:{}
})

export const selectCar = state=>state.car.cars

export default carSlice.reducer