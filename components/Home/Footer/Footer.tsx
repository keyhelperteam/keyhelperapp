import React from 'react'

const Footer = () => {
  return (
    <div className='bg-white py-10 flex-1'>
      <div className='w-[90%] px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'> 
          <div>
            <h1 className="text-xl md:text-2xl font-extrabold">
              <span className='text-3xl md:text-4xl text-green-500'>KeyHelper</span>
            </h1>
            <p className='mt-4 text-sm font-medium leading-[2rem] w-[80%] text-gray-600'>
              keyhelper is a powerful application designed to help you manage your tasks efficiently and effectively.
            </p>
          </div>
          <div>
            <h3 className='text-lg font-semibold text-gray-800'>About Us</h3>
            <ul className='mt-4 space-y-2'>
              <li><a href="#" className='text-blue-500 hover:underline'>Home</a></li>
              {/* <li><a href="#" className='text-blue-500 hover:underline'>About Us</a></li>
              <li><a href="#" className='text-blue-500 hover:underline'>Services</a></li>
              <li><a href="#" className='text-blue-500 hover:underline'>Contact</a></li> */}
            </ul>
          </div>
          <div>
            <h3 className='text-lg font-semibold text-gray-800'>Quick Links</h3>
            <ul className='mt-4 space-y-2'>
              <li><a href="/PrivacyAndPolicy" className='text-blue-500 hover:underline'>Privacy Policy</a></li>
              <li><a href="/TermsOfService" className='text-blue-500 hover:underline'>Terms of Service</a></li>
            </ul>
          </div>

          
        </div>
        
        <div className='mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm'>
          <p className='mt-4 text-gray-600'>© 2025 KeyHelper. All rights reserved.</p>
        </div>
        
      </div>
    </div>
  )
}

export default Footer