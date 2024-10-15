import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const cart = createSlice({
  name: 'cart',
  initialState: {
    items: (() => {
      const storedItems = localStorage.getItem('cartItem');
      if (storedItems) {
        try {
          const parsedItems = JSON.parse(storedItems);
          return Array.isArray(parsedItems) ? parsedItems : [];
        } catch (error) {
          console.error('Error parsing cart items from localStorage:', error);
          return [];
        }
      }
      return [];
    })(),
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
    increaseQuantity: (state, action) => {
      const existItem = state.items.find(
        (i) => i.cartItemId === action.payload
      );
      if (existItem) {
        existItem.item.quantity += 1;
      }
      localStorage.setItem('cartItem', JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {
      const existItem = state.items.find((item) => item.cartItemId === action.payload);
      if (existItem) {
        if (existItem.item.quantity > 1) {
          existItem.item.quantity -= 1;
        } else {
          state.items = state.items.filter((i) => i.cartItemId !== action.payload);
        }
      }
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
  increaseQuantity,
  removeFromCart,
} = cart.actions;
export default cart.reducer;
