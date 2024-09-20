import { configureStore } from '@reduxjs/toolkit';
import cart from './cart/slice';

export default configureStore({
  reducer: {
    cart,
  },
});
