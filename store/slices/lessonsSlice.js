import { createSlice } from "@reduxjs/toolkit";
import {HYDRATE} from 'next-redux-wrapper'

export const popupSlice = createSlice({
    name: 'lessons',
    initialState: {
       statuses: [],
       lessons_type: []
    },
    reducers: {
        setLessonsState: (state,action) =>{
            state.statuses = action.payload.statuses
            state.lessons_type = action.payload.lessons_type
        }
    },
    extraReducers: {
        [HYDRATE]: (state,action) =>{
           
        }
    }
})

export const {setLessonsState} =  popupSlice.actions

export default popupSlice.reducer