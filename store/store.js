import {configureStore,combineReducers} from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'

import profileSlice from './slices/profile'
import popupSlice  from './slices/popup'
import lessonsSlice from './slices/lessonsSlice'
import editorSlice from './slices/editor'
import chatSlice from './slices/chat'

export default  configureStore({
    reducer: {
        profile: profileSlice,
        popup: popupSlice,
        lessons: lessonsSlice,
        editor: editorSlice,
        chat: chatSlice
    },
    devTools: true
})


// export const wrapper = createWrapper(makeStore)