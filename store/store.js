import {configureStore,combineReducers} from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'

import profileSlice from './slices/profile'
import popupSlice  from './slices/popup'
import lessonsSlice from './slices/lessonsSlice'

export default  configureStore({
    reducer: {
        profile: profileSlice,
        popup: popupSlice,
        lessons: lessonsSlice
    },
    devTools: true
})


// export const wrapper = createWrapper(makeStore)