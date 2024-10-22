'use client'

import { useEeModal } from "@/features/geoplatforms/store/use-ee-modal"
import { IoIosCloseCircle } from 'react-icons/io'

export const EeModal = () => {
  const [open, setOpen] = useEeModal()

  return (
    <div className='absolute flex bg-neutral-700 z-[99999] w-full h-full items-center justify-center backdrop-blur-sm'>
      <iframe 
        src='https://ismailfaruqi.users.earthengine.app/view/geoplatform-sda-irigasi'
        className='size-[90%]'
        title='Earth Engine Iframe'
      />
      <IoIosCloseCircle 
        className="size-4"
        onClick={() => {setOpen(false)}}
      />
    </div>
  )
}
