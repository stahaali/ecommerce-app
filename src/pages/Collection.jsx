import React, { useContext } from 'react'
import Product from './Product';
import { ShopContext } from '../context/ShopContext';

const Collection = () => {
const {products}  = useContext(ShopContext);

  return (
    <>
      <div className='flex flex flex-col'>

      </div>
    </>
  )
}

export default Collection