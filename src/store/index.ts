import headerReducer from './header'
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    headerReducer,
  }
});

