import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'app',
    initialState: {
        isMenuOpen: false,
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu: (state) => {
            state.isMenuOpen = false;
        }
    },
});

export const { toggleMenu, closeMenu } = slice.actions;
export default slice.reducer;