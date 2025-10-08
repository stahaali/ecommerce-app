import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

export const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible, setVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {

    if (location.pathname.includes('collection') && showSearch ) {
      setVisible(false);
    } 
    else {
      setVisible(true);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center py-4 pb-5 transition-all duration-300">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 rounded-full shadow-sm">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-72 sm:w-96 outline-none bg-transparent text-sm px-3"
          placeholder="Search"
        />
        <img className="w-4 cursor-pointer" src={assets.search_icon} alt="search" />
      </div>

      <img
        onClick={() => setShowSearch(false)}
        className="inline w-3 ml-3 cursor-pointer"
        src={assets.cross_icon}
        alt="close"
      />
    </div>
  ) : null;
};
