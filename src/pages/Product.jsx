import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProduct from '../components/RelatedProduct';

const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState();

  useEffect(() => {
    if (!Array.isArray(products)) return;

    const item = products.find(p => String(p._id) === String(productId));

    if (item) {
      setProductData(item);
      setImage(Array.isArray(item.image) && item.image.length ? item.image[0] : '');
    } else {
      setProductData(null);
      setImage('');
    }
  }, [productId, products]); 

  if (!productData) return <div className='opacity-0'></div>;

  return (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {productData.image?.map((img, index) => (
              <img
                key={index}
                src={img}
                className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer border border-gray-200 hover:border-black transition'
                alt=''
                onClick={() => setImage(img)} 
              />
            ))}
          </div>

          
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto object-contain' src={image} alt='' />
          </div>
        </div>

        <div className='flex-1'>
        <h1 className='font-medium text-2xl mt-2'>
          {productData.name || productData.Name || 'Unnamed Product'}
        </h1>

        <div className='flex items-center gap-1 mt-2'>
              <img src={assets.star_icon} className='w-3 5' alt="" />
              <img src={assets.star_icon} className='w-3 5' alt="" />
              <img src={assets.star_icon} className='w-3 5' alt="" />
              <img src={assets.star_icon} className='w-3 5' alt="" />
              <img src={assets.star_dull_icon} className='w-3 5' alt="" />

              <p className='pl-2'>(122)</p>
        </div>
        <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
        <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>

        <div className='flex flex-col gap-4 my-8'>
              <p>Select Size</p>

              <div className='flex gap-2'>
                  {productData.sizes.map((item, index) => (
                      <button key={index} onClick={() => setSize(item)} className={`py-2 px-4 border rounded-md transition ${item === size ? 'border border-orange-500 bg-orange-100 text-orange-700' : 'border-gray-300 bg-gray-100 hover:border-gray-500'}`}>{item}</button>
                  ))}
              </div>
        </div>

        <button className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 cursor-pointer'>Add To Cart</button>

        <hr className='mt-8 sm:w-4/5'/>

        <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>

            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product</p>
            <p>Easy return and exchange policy within 7 days</p>

        </div>
      </div>
      </div>

      <div className='mt-20'>
            <div className='flex'>
                  <b className='border px-5 py-3 text-sm'>Description</b>
                  <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
            </div>

            <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
                  <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
                  <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
            </div>
      </div>

      <RelatedProduct category={productData.category} subCategory={productData.subCategory}/>
    </div>
  );
};

export default Product;
