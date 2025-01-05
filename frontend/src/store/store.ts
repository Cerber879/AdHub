import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlise';
import advertisementReducer from './slices/advertisementSlice';
import categoryReducer from './slices/categorySlice';
import chatReducer from './slices/chatSlice';
import filtersSearchReducer from './slices/filtersSearchSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    advertisement: advertisementReducer,
    category: categoryReducer,
    chat: chatReducer,
    filtersSearch: filtersSearchReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
