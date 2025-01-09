import { configureStore } from '@reduxjs/toolkit'

import categoryReducer from './slices/categorySlice'
import chatReducer from './slices/chatSlice'
import filtersSearchReducer from './slices/filtersSearchSlice'
import userReducer from './slices/userSlise'

const store = configureStore({
  reducer: {
    user: userReducer,
    category: categoryReducer,
    chat: chatReducer,
    filtersSearch: filtersSearchReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
