import { Button, CardBody, CardHeader } from '@material-tailwind/react'
import { Card } from 'flowbite-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Empresa() {
  return (
   <>
   <div className='p-8 ml-16 mt-16'>
    <h1 className='text-2xl font-extrabold font-sans mb-8'>Configuración-Empresa</h1>
    <span className='font-semibold'>Datos Generales</span>
    <h4>Información básica de tu Empresa</h4>
   </div>
   <section class="text-gray-500 body-font">
  <div class="container px-20 py-10 m-auto flex flex-wrap">
    <div class="flex flex-wrap w-full">
      <div class="p-4 lg:w-1/2  md:w-full">
        <div class="flex border-2 rounded-lg border-gray-900 border-opacity-50 p-4  sm:flex-row flex-col">
          
          {/* Icono omitido <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-8 h-8" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div> */}
          <div class="flex-grow">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-3 border-b-2 border-gray-500">Registrar Empresas</h2>
            <p class="leading-relaxed text-base mb-9">Texto</p>
            <Button className='bg-[#2F9B86]'>
              <NavLink to="/registrarempresa" className=' text-white inline-flex items-center'>
                INGRESAR
                
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
              </NavLink>
              </Button>


          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/2 md:w-full">
        <div class="flex border-2 rounded-lg border-gray-900 border-opacity-50 p-4 sm:flex-row flex-col">
          {/* Icono omitido <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div> */}
          <div class="flex-grow">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-3 border-b-2 border-gray-500">Listas de Empresas</h2>
            <p class="leading-relaxed text-base mb-9">Texto</p>
            <Button className='bg-[#2F9B86]' >
              <NavLink to="/listasempresa" className=' text-white inline-flex items-center'>
                INGRESAR
                
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
              </NavLink>
              </Button>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
   </>
  )
}
