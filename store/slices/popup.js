import { createSlice } from "@reduxjs/toolkit";
import {HYDRATE} from 'next-redux-wrapper'

export const popupSlice = createSlice({
    name: 'popup',
    initialState: {
        type: '',
        content: {
            type: '',
            fill: {}
        }
    },
    reducers: {
        setPopupType: (state,action) =>{
            state.type = action.payload.type
            state.content.type = action.payload.content.type
            state.content.fill = action.payload.content.fill
        }
    },
    extraReducers: {
        [HYDRATE]: (state,action) =>{
           
        }
    }
})

export const {setPopupType} =  popupSlice.actions

export default popupSlice.reducer