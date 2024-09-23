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
      const existProduct = state.items.find(
        (item) => item.item.item_id === action.payload.item.item_id
      );
      if (existProduct != null) {
        existProduct.item.quantity += 1;
      } else {
        state.items.push(action.payload);
      }
    },
  },
});

export const { addToCart, setCart } = cart.actions;
export default cart.reducer;