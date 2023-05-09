import { combineReducers, configureStore } from '@reduxjs/toolkit';

import ListSlice from './Slice/ListSlice';

const RootReducer = combineReducers({
  ListStore: ListSlice,
});

export const store = configureStore({
  reducer: RootReducer,
});
