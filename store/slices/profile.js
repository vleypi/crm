import { createSlice } from "@reduxjs/toolkit";
import {HYDRATE} from 'next-redux-wrapper'

export const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        user_id: null,
        name: null,
        surname: null,
        email: null,
        phone: null,
        role: null
    },
    reducers: {
        setProfile: (state,action) =>{
            state.user_id = action.payload.user_id
            state.name = action.payload.name
            state.surname = action.payload.surname
            state.email = action.payload.email
            state.phone = action.payload.phone
            state.role = action.payload.role
        }
    },
    extraReducers: {
        [HYDRATE]: (state,action) =>{
            state.name = action.payload.profile.name;
        }
    }
})

export const {setProfile} = profileSlice.actions

export default profileSlice.reducer