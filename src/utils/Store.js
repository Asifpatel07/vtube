import { configureStore } from '@reduxjs/toolkit';
import AppSlice from './AppSlice';
import searchSlice from './SearchSlice';
import ChatSlice from './ChatSlice';

const store = configureStore({
    reducer: {
        // your reducers here
        app: AppSlice,
        search: searchSlice,
        chat: ChatSlice
    },
    devTools: true,

});

export default store;