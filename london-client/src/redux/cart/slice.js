import { createSlice } from '@reduxjs/toolkit';

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
      const existProduct = state.items.find(
        (item) => item.item.item_id === action.payload.item.item_id
      );
      if (existProduct) {
        existProduct.item.quantity += 1;
      } else {
        state.items.push(action.payload);
      }
      localStorage.setItem('cartItem', JSON.stringify(state.items));
    },
    clearCart: (state) => {
      localStorage.removeItem('cartItem');
      state.items = [];
    },
    removeFromCart: (state, action) => {
      const existingItem = state.items.find(item => item.item.item_id === action.payload);
      if (existingItem) {
        if (existingItem.item.quantity > 1) {
          existingItem.item.quantity -= 1;
        } else {
          state.items = state.items.filter(item => item.item.item_id !== action.payload);
        }
        localStorage.setItem('cartItem', JSON.stringify(state.items));
      }
    },
    increaseQuantity: (state, action) => {
      const existingItem = state.items.find(item => item.item.item_id === action.payload);
      if (existingItem) {
        existingItem.item.quantity += 1;
        localStorage.setItem('cartItem', JSON.stringify(state.items));
      }
    },
  },
});

export const { addToCart, setCart, clearCart, removeFromCart, increaseQuantity } = cart.actions;
export default cart.reducer;
