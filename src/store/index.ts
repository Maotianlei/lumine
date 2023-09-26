/** @format */

import { configureStore } from '@reduxjs/toolkit';
import userInfoReducer from './userInfo';
import globalStateReducer from './globalState';
const store = configureStore({
    reducer: {
        userInfo: userInfoReducer,
        globalState: globalStateReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
