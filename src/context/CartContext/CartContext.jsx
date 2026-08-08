import { createContext, useContext, useEffect, useMemo, useReducer } from 'react';
import { toast } from 'react-toastify';

const CartContext = createContext(null);
const STORAGE_KEY = 'nbm_cart_v1';

function loadCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, quantity } = action.payload;
      const existing = state.find((item) => item.id === product.id);
      if (existing) {
        return state.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...state, { ...product, quantity }];
    }
    case 'REMOVE_ITEM':
      return state.filter((item) => item.id !== action.payload.id);
    case 'INCREASE_QTY':
      return state.map((item) =>
        item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    case 'DECREASE_QTY':
      return state
        .map((item) =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0);
    case 'SET_QTY':
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: Math.max(1, action.payload.quantity) }
          : item
      );
    case 'CLEAR_CART':
      return [];
    case 'HYDRATE':
      return action.payload;
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, [], loadCart);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const addItem = (product, quantity = 1) => {
    dispatch({ type: 'ADD_ITEM', payload: { product, quantity } });
    toast.success(`${product.name} added to cart`);
  };

  const removeItem = (id, name) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } });
    if (name) toast.info(`${name} removed from cart`);
  };

  const increaseQty = (id) => dispatch({ type: 'INCREASE_QTY', payload: { id } });
  const decreaseQty = (id) => dispatch({ type: 'DECREASE_QTY', payload: { id } });
  const setQty = (id, quantity) => dispatch({ type: 'SET_QTY', payload: { id, quantity } });
  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  const { totalItems, totalPrice } = useMemo(() => {
    return cart.reduce(
      (acc, item) => {
        acc.totalItems += item.quantity;
        acc.totalPrice += item.quantity * item.price;
        return acc;
      },
      { totalItems: 0, totalPrice: 0 }
    );
  }, [cart]);

  const value = {
    cart,
    addItem,
    removeItem,
    increaseQty,
    decreaseQty,
    setQty,
    clearCart,
    totalItems,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within a CartProvider');
  return ctx;
}
