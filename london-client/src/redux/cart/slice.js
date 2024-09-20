import { createSlice } from '@reduxjs/toolkit';

const cart = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    setCart: (state, action) => {
      state.items = action.payload;
    },
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { addToCart , setCart } = cart.actions;
export default cart.reducer;
