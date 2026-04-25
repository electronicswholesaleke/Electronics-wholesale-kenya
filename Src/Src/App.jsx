import React from 'react';

export default function App(){
  return (
    <div className='min-h-screen bg-gray-100'>
      <header className='bg-orange-500 text-white p-4 text-center text-2xl font-bold'>EWK Electronics Wholesale Kenya</header>
      <section className='max-w-6xl mx-auto p-6'>
        <div className='bg-white rounded-2xl shadow p-6'>
          <h1 className='text-3xl font-bold mb-2'>Kenya Online Electronics Store</h1>
          <p className='text-gray-600 mb-6'>Phones, TVs, Fridges, Cookers, Laptops and more across Kenya.</p>
          <div className='grid md:grid-cols-3 gap-4'>
            {['Smart TV','Fridge','Cooker','Laptop','Phone','Blender'].map((item,i)=>(
              <div key={i} className='border rounded-xl p-4 bg-gray-50'>
                <div className='h-32 bg-gray-200 rounded mb-3'></div>
                <h3 className='font-bold'>{item}</h3>
                <p className='text-green-700 font-semibold'>Best Price</p>
                <button className='mt-3 bg-orange-500 text-white px-4 py-2 rounded-lg w-full'>Buy Now</button>
              </div>
            ))}
          </div>
        </div>
        <div className='mt-6 bg-white rounded-2xl shadow p-6 border-2 border-green-600'>
          <h2 className='text-2xl font-bold mb-4'>M-Pesa Checkout Only</h2>
          <div className='grid md:grid-cols-4 gap-3'>
            <input defaultValue='0794336181' className='border p-3 rounded-xl' />
            <input defaultValue='Jaffer Mohammed' className='border p-3 rounded-xl' />
            <input placeholder='Amount (KES)' className='border p-3 rounded-xl' />
            <button className='bg-green-700 text-white rounded-xl px-6 py-3 font-bold'>Pay via M-Pesa</button>
          </div>
          <p className='text-sm text-green-700 mt-3'>Accepted payment method: M-Pesa ONLY.</p>
        </div>
        <div className='mt-6 bg-white rounded-2xl shadow p-6'>
          <h2 className='text-2xl font-bold mb-4'>Customer Support</h2>
          <p>Customer Care: 0755053375</p>
          <p>WhatsApp: 0755053375</p>
        </div>
      </section>
      <a href='https://wa.me/254755053375' className='fixed bottom-6 right-6 bg-green-500 text-white px-5 py-4 rounded-full shadow-2xl font-bold'>WhatsApp Chat</a>
    </div>
  )
}
