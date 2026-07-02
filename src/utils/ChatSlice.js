import { createSlice } from '@reduxjs/toolkit';
import { LIVE_CHAT_COUNT } from './constants';

const ChatSlice = createSlice({
    name: 'chat',
    initialState: {
        messages: []
    },
    reducers: {
        addMessage: (state, action) => {
            state.messages.splice(LIVE_CHAT_COUNT, 1); // Remove the last message if there are already 10 messages
            state.messages.unshift(action.payload);
        }
    }
});

export const { addMessage } = ChatSlice.actions;
export default ChatSlice.reducer;