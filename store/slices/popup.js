import { createSlice } from "@reduxjs/toolkit";
import {HYDRATE} from 'next-redux-wrapper'

export const popupSlice = createSlice({
    name: 'popup',
    initialState: {
        type: '',
        contentType: '',
        functions: {}
    },
    reducers: {
        setPopupType: (state,action) =>{
            console.log(action.payload)
            state.type = action.payload.type
            state.contentType = action.payload.contentType
            state.functions = action.payload.functions
        }
    },
    extraReducers: {
        [HYDRATE]: (state,action) =>{
           
        }
    }
})

export const {setPopupType} =  popupSlice.actions

export default popupSlice.reducer