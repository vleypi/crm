import {configureStore,combineReducers} from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'

import profileSlice from './slices/profile'
import popupSlice  from './slices/popup'

export default  configureStore({
    reducer: {
        profile: profileSlice,
        popup: popupSlice,
    },
    devTools: true
})


// export const wrapper = createWrapper(makeStore)