import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ChatState {
  messages: any[];
}

const initialState: ChatState = {
  messages: [],
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setMessages: (state, action: PayloadAction<any[]>) => {
      state.messages = action.payload;
    },
    addMessage: (state, action: PayloadAction<any>) => {
      state.messages.push(action.payload);
    },
  },
});

export const { setMessages, addMessage } = chatSlice.actions;
export default chatSlice.reducer;
