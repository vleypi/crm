import { createSlice } from "@reduxjs/toolkit";
import {HYDRATE} from 'next-redux-wrapper'

export const editorSlice = createSlice({
    name: 'editor',
    initialState: {
        blocks: {
            blocks: []
        },
        header: ''
    },
    reducers: {
        setEditor: (state,action) =>{
           state.blocks = action.payload.blocks
           state.header = action.payload.header
        }
    }
})

export const {setEditor} = editorSlice.actions

export default editorSlice.reducer