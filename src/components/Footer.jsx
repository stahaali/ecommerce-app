import React from 'react'
import { assets } from '../assets/assets'

export default function Footer() {
  return (
    <>
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div>
                    <img src={assets.logo} className='mb-5 w-32 ' alt="" />
                    <p className='w-full md:w-2/3 text-gray-600'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sapiente maxime animi quos sit explicabo! Assumenda possimus voluptatibus cumque harum, odit repellendus enim dicta ducimus, temporibus perferendis nemo consectetur culpa!
                    </p>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>

                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+1-212-456-7890</li>
                        <li>contact@foever.com</li>
                    </ul>
                </div>

            </div>

            <div>
                <hr className='border-y-stone-300'/>
                <p className='py-5 text-sm text-center'>Copyright 2024&copy; forever.com - All Right Reserved.</p>
            </div>

        </div>
    </>
  )
}
