import { createSlice } from "@reduxjs/toolkit";
import {HYDRATE} from 'next-redux-wrapper'

export const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        chat_id: null,
        chat_name: null,
        messages: []
    },
    reducers: {
        setChat: (state,action) =>{
            state.chat_id = action.payload.chat_id
            state.chat_name = action.payload.chat_name
            state.messages = action.payload.messages
        }
    },
    extraReducers: {
        [HYDRATE]: (state,action) =>{
            state.name = action.payload.profile.name;
        }
    }
})

export const {setChat} = chatSlice.actions

export default chatSlice.reducer