import React, { useState, createContext } from 'react';
import { products } from '../assets/assets';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = '$';
  const delivery_fee = 10;

  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();

  // 🛒 Add to Cart
  const addToCart = (itemId, size) => {
    if (!size) {
      toast.error('Please select a product size', { position: 'top-center' });
      return;
    }

    const updatedCart = structuredClone(cartItems);
    if (!updatedCart[itemId]) updatedCart[itemId] = {};
    updatedCart[itemId][size] = (updatedCart[itemId][size] || 0) + 1;

    setCartItems(updatedCart);
    toast.success('Item added to cart', { position: 'top-center' });
  };

  // 🧮 Total item count
  const getCartCount = () => {
    let totalCount = 0;
    Object.keys(cartItems).forEach((itemId) => {
      Object.keys(cartItems[itemId]).forEach((size) => {
        totalCount += cartItems[itemId][size];
      });
    });
    return totalCount;
  };

  // 🗑️ Remove item
  const removeFromCart = (itemId, size) => {
    const updatedCart = structuredClone(cartItems);
    if (updatedCart[itemId] && updatedCart[itemId][size]) {
      updatedCart[itemId][size] -= 1;
      if (updatedCart[itemId][size] <= 0) delete updatedCart[itemId][size];
      if (Object.keys(updatedCart[itemId]).length === 0) delete updatedCart[itemId];
    }
    setCartItems(updatedCart);
  };

  // 🔢 Update quantity directly
  const updateQuantity = (itemId, size, quantity) => {
    setCartItems((prev) => {
      const updated = structuredClone(prev);
      if (!updated[itemId]) return prev;

      if (quantity === 0) {
        delete updated[itemId][size];
        if (Object.keys(updated[itemId]).length === 0) delete updated[itemId];
      } else {
        updated[itemId][size] = quantity;
      }

      return updated;
    });
  };

  // 💰 Calculate total price
  const getCartAmount = () => {
    let totalAmount = 0;

    for (const itemId in cartItems) {
      const productInfo = products.find((product) => product._id === itemId);
      if (!productInfo) continue;

      for (const size in cartItems[itemId]) {
        const quantity = cartItems[itemId][size];
        if (quantity > 0) totalAmount += productInfo.price * quantity;
      }
    }

    return totalAmount;
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
    getCartAmount,
    navigate
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
