import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from './../components/Title';
import ProductItem from './../components/ProductItem';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  const toggleCategory = (e) => {
    const value = e.target.value;
    if (category.includes(value)) {
      setCategory((prev) => prev.filter((item) => item !== value));
    } else {
      setCategory((prev) => [...prev, value]);
    }
  };

  const toggleSubcategory = (e) => {
    const value = e.target.value;
    if (subCategory.includes(value)) {
      setSubCategory((prev) => prev.filter((item) => item !== value));
    } else {
      setSubCategory((prev) => [...prev, value]);
    }
  };

  const applyFilter = () => {
    let productCopy = [...products];

    if (showSearch && search) {
      productCopy = productCopy.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productCopy = productCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productCopy = productCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    if (sortType === 'low-high') {
      productCopy.sort((a, b) => a.price - b.price);
    } else if (sortType === 'high-low') {
      productCopy.sort((a, b) => b.price - a.price);
    }

    setFilterProducts(productCopy);
  };

  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, sortType, search, showSearch]);

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 border-t pt-10">

        {/* Filters Section */}
        <div className="min-w-60">
          <p
            onClick={() => setShowFilter(!showFilter)}
            className="my-2 text-xl flex items-center cursor-pointer gap-2"
          >
            Filters
            <img
              src={assets.dropdown_icon}
              className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
              alt=""
            />
          </p>

          <div
            className={`px-4 py-3 mt-2 w-56 ${showFilter ? '' : 'hidden'} sm:block`}
          >
            <div className="border border-gray-300 p-4 mb-5">
              <p className="text-sm font-semibold mb-3">CATEGORIES</p>
              <div className="flex flex-col gap-2 text-sm text-gray-700">
                {['Men', 'Women', 'Kids'].map((cat) => (
                  <label key={cat} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="w-4 h-4"
                      value={cat}
                      onChange={toggleCategory}
                    />
                    {cat}
                  </label>
                ))}
              </div>
            </div>

            <div className="border border-gray-300 p-4 mb-5">
              <p className="text-sm font-semibold mb-3">TYPE</p>
              <div className="flex flex-col gap-2 text-sm text-gray-700">
                {['Topwear', 'Bottomwear', 'Winterwear'].map((type) => (
                  <label key={type} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="w-4 h-4"
                      value={type}
                      onChange={toggleSubcategory}
                    />
                    {type}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="flex-1">
          <div className="flex justify-between text-base sm:text-2xl mb-4">
            <Title text1={'All'} text2={'COLLECTIONS'} />
            <select
              className="border-2 border-gray-300 text-sm px-2"
              onChange={(e) => setSortType(e.target.value)}
            >
              <option value="relevant">Sort by: Relevant</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            {filterProducts.map((item, index) => (
              <ProductItem
                key={index}
                name={item.name}
                id={item._id}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Collection;
