import axios from 'axios';
import { addToCart } from './slice';

const addToCartAPI =
  (item_id, size_id, salad_toppings, sauce_toppings) => async (dispatch) => {
    try {
      const { data } = await axios.post(
        'http://127.0.0.1:8000/cart/api/add_to_cart',
        {
          item_id,
          size_id,
          salad_toppings,
          sauce_toppings,
        }
      );
      dispatch(addToCart(data));
    } catch (error) {
      console.log('Sepete eklerken hata oluştu: ' + error.message);
    }
  };

export { addToCartAPI };
