'use client'

import { GiTv } from 'react-icons/gi'
import { useEeModal } from '@/features/geoplatforms/store/use-ee-modal'
import { EeModal } from './ee-modal'

export const EarthEngine = () => {
  const [open, setOpen] = useEeModal()
  
  return (
    <>
      {open &&
        <>
          <EeModal />
        </>
      }
      <div className='w-full'>
      <div className='relative flex items-center justify-center bg-transparent'>
        <div 
          className='fixed size-12 bg-[#274546] rounded-full bottom-2 z-50 flex items-center justify-center cursor-pointer hover:bg-[#274546]/90 transition-all duration-150'
          onClick={() => {setOpen(true)}}
        >
          <GiTv className='size-6 text-white'/>
        </div>
        </div>
      </div>
    </>
    
  )
}
