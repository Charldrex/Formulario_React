import React from 'react'
 

export default function page() {
  
  

  return (
    <div className='flex justify-center items-center w- [100%] h-[100vh]'>
      <div className='max-w-md w-full mx-auto p-6 bg-gray-800 rounded-lg shadow-md'>
      <h2 className='text-3xl text-center text-green-400 font-bold mb-6'>Formulario</h2>
      <form action="">
        <div className='mb-4'>
          <label className="block text-white font-semibold mb-2" htmlFor="">Nombre</label>
          <input placeholder='Nombre' className='w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500' required 
          type="text"
          
          />
        </div>
        <div className='mb-4'>
          <label className="block text-white font-semibold mb-2" htmlFor="">Apellido</label>
          <input placeholder='Apellido' className='w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500' required type="text" />
        </div>
        <div className='mb-4'>
          <label className="block text-white font-semibold mb-2" htmlFor="">Cedula</label>
          <input placeholder='Cedula' className='w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500' required type="text" />
        </div>
        <div className='mb-4'>
          <label className="block text-white font-semibold mb-2" htmlFor="">Dirección</label>
          <input placeholder='Dirección' className='w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500' required type="text" />
        </div>
        <div className='flex justify-center'>
          <button type='submit' className='bg-green-400 text-black font-semibold px-6 py-2 rounded-lg focus-outline-white'>
            Guardar
          </button>
        </div>
      </form>
    </div>
    </div>
    
  )
}
