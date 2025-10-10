import React, { useState, createContext } from 'react';
import { products } from '../assets/assets';
import { toast } from 'react-toastify';

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = '$';
  const delivery_fee = 10;

  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});

  // 🛒 Add to Cart Function
  const addToCart = (itemId, size) => {
    if (!size) {
      toast.error('Please select a product size', {
        position: 'top-center',
      });
      return;
    }

    // Clone cart state safely
    let updatedCart = structuredClone(cartItems);

    // Initialize item object if it doesn't exist
    if (!updatedCart[itemId]) {
      updatedCart[itemId] = {};
    }

    // Increment or add new size quantity
    updatedCart[itemId][size] = (updatedCart[itemId][size] || 0) + 1;

    setCartItems(updatedCart);

    toast.success('Item added to cart', {
      position: 'top-center',
    });
  };

  // 🧮 Get total cart item count
  const getCartCount = () => {
    let totalCount = 0;

    Object.keys(cartItems).forEach((itemId) => {
      Object.keys(cartItems[itemId]).forEach((size) => {
        totalCount += cartItems[itemId][size];
      });
    });

    return totalCount;
  };

  // 🗑️ Remove item (optional helper)
  const removeFromCart = (itemId, size) => {
    let updatedCart = structuredClone(cartItems);

    if (updatedCart[itemId] && updatedCart[itemId][size]) {
      updatedCart[itemId][size] -= 1;

      // If quantity hits 0, remove that size
      if (updatedCart[itemId][size] <= 0) {
        delete updatedCart[itemId][size];
      }

      // If no sizes remain, remove entire product
      if (Object.keys(updatedCart[itemId]).length === 0) {
        delete updatedCart[itemId];
      }
    }

    setCartItems(updatedCart);
  };

  // 📝 Update item quantity directly
const updateQuantity = (itemId, size, quantity) => {
  setCartItems(prev => {
    const updated = structuredClone(prev);

    // If product doesn’t exist, return previous state
    if (!updated[itemId]) return prev;

    if (quantity === 0) {
      // Remove the size completely
      delete updated[itemId][size];

      // Remove the product if it has no sizes left
      if (Object.keys(updated[itemId]).length === 0) {
        delete updated[itemId];
      }
    } else {
      // Update quantity for that size
      updated[itemId][size] = quantity;
    }

    return updated;
  });
};


    const contextValue = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity, 
    getCartCount,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
