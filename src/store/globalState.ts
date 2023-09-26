/** @format */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './index';
import defaultSettings from '@/settings.json';

interface globalState {
    settings?: typeof defaultSettings;
    userLoading?: boolean;
}

const initialState: globalState = {
    settings: defaultSettings,
};

export const globalStateSlice = createSlice({
    name: 'globalState',
    initialState,
    reducers: {
        changeUserLoading: (state, action: PayloadAction<boolean>) => {
            state.userLoading = action.payload;
        },
        changeSettings: (
            state,
            action: PayloadAction<typeof defaultSettings>,
        ) => {
            state.settings = { ...state.settings, ...action.payload };
        },
        clearGlobalState: state => {
            state.settings = defaultSettings;
            state.userLoading = void 0;
        },
    },
});

export const { changeUserLoading, changeSettings, clearGlobalState } =
    globalStateSlice.actions;

export const selectGlobalState = (state: RootState) => state.globalState;

export default globalStateSlice.reducer;
