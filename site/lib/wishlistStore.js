'use client';
import { createContext, useContext, useReducer, useEffect, useCallback } from 'react';

const WishlistContext = createContext();

const STORAGE_KEY = 'faie-wishlist';

function getInitialState() {
  if (typeof window === 'undefined') return { items: [] };
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : { items: [] };
  } catch {
    return { items: [] };
  }
}

function wishlistReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_ITEM': {
      const exists = state.items.find(item => item.id === action.payload.id);
      if (exists) {
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload.id),
        };
      }
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    case 'CLEAR_WISHLIST':
      return { items: [] };
    case 'HYDRATE':
      return action.payload;
    default:
      return state;
  }
}

export function WishlistProvider({ children }) {
  const [state, dispatch] = useReducer(wishlistReducer, { items: [] });

  useEffect(() => {
    const stored = getInitialState();
    dispatch({ type: 'HYDRATE', payload: stored });
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }
  }, [state]);

  const toggleItem = useCallback((product) => {
    dispatch({
      type: 'TOGGLE_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        numericPrice: product.numericPrice,
        image: product.image,
      },
    });
  }, []);

  const removeItem = useCallback((id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  }, []);

  const clearWishlist = useCallback(() => {
    dispatch({ type: 'CLEAR_WISHLIST' });
  }, []);

  const isInWishlist = useCallback(
    (productId) => state.items.some(item => item.id === productId),
    [state.items]
  );

  const wishlistCount = state.items.length;

  return (
    <WishlistContext.Provider
      value={{
        items: state.items,
        toggleItem,
        removeItem,
        clearWishlist,
        isInWishlist,
        wishlistCount,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}
