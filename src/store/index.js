import {configureStore} from '@reduxjs/toolkit';
import userAuthSlice from './slices/userAuthSlice.js'; // імпорт твого ред'юсера

export const store = configureStore({
  reducer: {
    userAuthSlice: userAuthSlice,
    // сюди додаються інші слайси (наприклад: user: userReducer)
  },
});
