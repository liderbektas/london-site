import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid'; 

const cart = createSlice({
  name: 'cart',
  initialState: {
    items: localStorage.getItem('cartItem')
      ? JSON.parse(localStorage.getItem('cartItem'))
      : [],
  },
  reducers: {
    setCart: (state, action) => {
      state.items = action.payload;
      localStorage.setItem('cartItem', JSON.stringify(action.payload));
    },
    addToCart: (state, action) => {
      const newItem = { ...action.payload, cartItemId: uuidv4() }; 
      console.log(newItem);
      state.items.push(newItem);
      localStorage.setItem('cartItem', JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.cartItemId !== action.payload);
      localStorage.setItem('cartItem', JSON.stringify(state.items));
    },
    clearCart: (state) => {
      localStorage.removeItem('cartItem');
      state.items = [];
    },
  },
});

export const {
  addToCart,
  setCart,
  clearCart, 
  removeFromCart,
} = cart.actions;
export default cart.reducer;
