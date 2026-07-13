import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

export const CartComponent = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: '20px', border: '1px solid black' }}>
      <h2>Cart Items: {items.length}</h2>
      <button onClick={() => dispatch(addToCart('New Meal'))}>
        Add Meal to Cart
      </button>
      <ul>{items.map((item, index) => <li key={index}>{item}</li>)}</ul>
    </div>
  );
};