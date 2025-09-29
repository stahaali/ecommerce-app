import React, { useContext, useState } from 'react'
import Product from './Product';
import { ShopContext } from '../context/ShopContext';

const Collection = () => {
const {products}  = useContext(ShopContext);
const [showFilter, setShowFilter] = useState(false);

  return (
    <>

    <div className='flex flex-col sm:flex-row gap-1 sm:gap:10 border-t'>

      <div className='min-w-60'>
    
      <p className='my-2 text-xl flex items-center cursor-pointer gap-2'>Filters</p>
        <div className={`px-4 py-3 mt-2 w-56 ${showFilter ? '' : 'hidden'} sm:block`}>
        
        {/* Categories */}
          <div className="border border-gray-300 p-4 mb-5">
            <p className="text-sm font-semibold mb-3">CATEGORIES</p>
            <div className="flex flex-col gap-2 text-sm text-gray-700">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" value={'Men'} /> Men
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" value={'Women'} /> Women
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" value={'Kids'} /> Kids
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
    </div>

    </>
  )
}

export default Collection