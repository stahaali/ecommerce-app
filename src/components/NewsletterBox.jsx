import React from 'react'

function NewsletterBox() {
  return (
    <>
        <div className='text-center'>
            <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
            <p className='text-gray-400 mt-3'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse culpa sed expedita veritatis, necessitatibus labore quis quidem in eos! Praesentium rerum soluta laboriosam magni cumque architecto exercitationem tenetur, libero maxime?
            </p>
            <form action="" className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
                <input type="text" className='w-full sm:flex-1 outline-none' placeholder='Enter Your Email' required/>
                <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCrIBE</button>
            </form>
        </div>
    </>
  )
}

export default NewsletterBox