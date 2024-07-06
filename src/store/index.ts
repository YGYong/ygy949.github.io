import headerReducer from './header'
import globalThemeReducer from './global'
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    headerReducer,
    globalThemeReducer,
  }
});

