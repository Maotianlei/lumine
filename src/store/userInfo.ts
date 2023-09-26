/** @format */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './index';

interface UserinfoState {
    name?: string;
    avatar?: string;
    phone?: string;
    email?: string;
    userid: string;
}

const initialState: UserinfoState = {
    name: '',
    avatar: '',
    phone: '',
    email: '',
    userid: '',
};

export const userinfoSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        updateUserInfo: (state, action: PayloadAction<Object>) => {
            for (let i in action.payload) {
                if (i in state) {
                    state[i] = action.payload[i];
                }
            }
        },
        delUserInfo: state => {
            for (let i in initialState) {
                state[i] = initialState[i];
            }
        },
    },
});

export const { updateUserInfo, delUserInfo } = userinfoSlice.actions;

export const selectUserinfo = (state: RootState) => state.userInfo;

export default userinfoSlice.reducer;
