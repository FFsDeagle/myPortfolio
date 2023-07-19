import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface NavbarState {
    value: string;
}

export const initialState: NavbarState = {
    value: '/about',
}

export const navbarSlice = createSlice({
    name: 'navbar',
    initialState,
    reducers: {
        changePage: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        }
    }
})

export const { changePage } = navbarSlice.actions;

export const selectNavbar = (state: RootState) => state.navbar.value;

export default navbarSlice.reducer;