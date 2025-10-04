import React, { useContext, useState, useEffect } from 'react';
import Product from './Product';
import { ShopContext } from '../context/ShopContext';
import {assets} from '../assets/assets'
import Title from './../components/Title';
import ProductItem from './../components/ProductItem';

const Collection = () => {
const {products}  = useContext(ShopContext);
const [showFilter, setShowFilter] = useState(false);
const [filterProducts, setFilterProducts] = useState([]);
const [category, setCategory] = useState([]);
const [subCategory, setSubCategory] = useState([]);

const toggleCategory = (e)=>{

  if(category.includes(e.target.value))
  {
      setCategory(prev=> prev.filter(item !== e.target.value ))
  }
  else
  {
      setCategory(prev => [...prev, e.target.value]);
  }
  
}

useEffect(()=>{

  setFilterProducts(products);

},[])

useEffect(()=>{

console.log(category);

},[category])

  return (
    <>

    <div className='flex flex-col sm:flex-row gap-1 sm:gap:10 border-t pt-10'>

      <div className='min-w-60'>
    
      <p onClick={()=> setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>Filters
        <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} alt="" />
      </p>

        <div className={`px-4 py-3 mt-2 w-56 ${showFilter ? '' : 'hidden'} sm:block`}>
        
        {/* Categories */}
          <div className="border border-gray-300 p-4 mb-5">
            <p className="text-sm font-semibold mb-3">CATEGORIES</p>
            <div className="flex flex-col gap-2 text-sm text-gray-700">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" value={'Men'} onChange={toggleCategory} /> Men
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" value={'Women'} onChange={toggleCategory} /> Women
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" value={'Kids'} onChange={toggleCategory}/> Kids
              </label>
            </div>
          </div>

          {/* Type */}
          <div className="border border-gray-300 p-4 mb-5">
            <p className="text-sm font-semibold mb-3">TYPE</p>
            <div className="flex flex-col gap-2 text-sm text-gray-700">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" value={'Topwear'} /> Topwear
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" value={'Bottomwear'} /> Bottomwear
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" value={'Winterwear'} /> Winterwear
              </label>
            </div>
          </div>
        </div>
      </div>

      {/*Right Side*/}

      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
            <Title text1={'All'} text2={'COLLECTIONS'}/>
            <select className='border-2 border-gray-300 text-sm px-2'>
              <option value="relevant">Sort by: Relevant</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item,index)=>(
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
            ))
          }
        </div>
      </div>
    </div>

    </>
  )
}

export default Collection