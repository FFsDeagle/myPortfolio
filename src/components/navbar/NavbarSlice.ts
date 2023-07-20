import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface NavbarState {
    value: string;
    resize: any;
}

export const initialState: NavbarState = {
    value: '/about',
    resize: null,
}

export const navbarSlice = createSlice({
    name: 'navbar',
    initialState,
    reducers: {
        changePage: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
        resizeWindow: (state, action: PayloadAction<any>) => {
            state.resize = action.payload;
        }
    }
})

export const { changePage } = navbarSlice.actions;

export const selectNavbar = (state: RootState) => state.navbar.value;

export default navbarSlice.reducer;