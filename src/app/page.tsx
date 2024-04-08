"use client";
import React from 'react'
import {useForm, SubmitHandler } from 'react-hook-form'
 

export default function page() {
  
  const {register, handleSubmit,
    formState: {errors}
  } = useForm()

  console.log(errors)
  
  const onSubmit = handleSubmit((data)=>{
    console.log(data)
  })

  return (
    <div className='flex justify-center items-center w- [100%] h-[100vh]'>
      <div className='max-w-md w-full mx-auto p-6 bg-gray-800 rounded-lg shadow-md'>
      <h2 className='text-3xl text-center text-green-400 font-bold mb-6'>Formulario</h2>
      <form onSubmit={onSubmit}>
        <div className='mb-4'>
          <label className="block text-white font-semibold mb-2" htmlFor="">Nombre</label>
          <input placeholder='Nombre' className='w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500'  
          type="text"
          {...register("nombre",{
            required: true
          })}
          />
          {
            errors.nombre && <span className='block text-red-700 font-semibold text-xs pl-px'>Nombre es requerido</span>
          }
        </div>
        <div className='mb-4'>
          <label className="block text-white font-semibold mb-2" htmlFor="">Apellido</label>
          <input placeholder='Apellido' className='w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500' 
          type="text"
          {...register("apellido",{
            required: true
          })}
          />
          {
            errors.apellido && <span className='block text-red-700 font-semibold text-xs pl-px'>Apellido es requerido</span>
          }
        </div>
        <div className='mb-4'>
          <label className="block text-white font-semibold mb-2" htmlFor="">Cedula</label>
          <input placeholder='Cedula' className='w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500'  
          type="text" 
          {...register("cedula",{
            required: true
          })}
          />
          {
            errors.cedula && <span className='block text-red-700 font-semibold text-xs pl-px'>Cedula es requerido</span>
          }
        </div>
        <div className='mb-4'>
          <label className="block text-white font-semibold mb-2" htmlFor="">Dirección</label>
          <input placeholder='Dirección' className='w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500'  
          type="text" 
          {...register("direccion",{
            required: true
          })}
          />
          {
            errors.direccion && <span className='block text-red-700 font-semibold text-xs p-1'>Dirección es requerido</span>
          }
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
