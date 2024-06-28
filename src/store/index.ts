import counterReducer from './count'
import toopTipsReducer from './toopTips'
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    counterReducer,
    toopTipsReducer
  }
});

