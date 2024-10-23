'use client'

import { useEeModal } from "@/features/geoplatforms/store/use-ee-modal"

export const EeModal = () => {
  const [open, setOpen] = useEeModal()

  return (
    <div 
      className='absolute flex bg-black/70 z-[99999] h-full w-full items-center justify-center backdrop-blur-sm'
    >
      <div className="relative size-[85%] bg-[#DCDDE6] flex items-center justify-center">
        <img 
          src="/image/corner.svg"
          className="absolute right-[94px] -top-[20px] z-[100] w-[26px] h-[20px]"
        />
        <div className="absolute bg-[#DCDDE6] right-0 -top-[26px] w-[100px] h-[26px] rounded-tl-2xl rounded-tr-md flex items-center justify-center">
          <div className="flex items-center justify-center gap-2 mt-1.5">
            <div 
              id="close-too-:D" 
              className="size-[13px] bg-[#0CC52C] rounded-full cursor-pointer" 
              onClick={() => setOpen(false)}
            />
            <div id="maximize" className="size-[13px] bg-[#FEB62B] rounded-full" />
            <div 
              id="close"
              className="size-[13px] bg-[#F16865] rounded-full cursor-pointer" 
              onClick={() => setOpen(false)}
            />
          </div>
        </div>
        <iframe 
          src='https://ismailfaruqi.users.earthengine.app/view/geoplatform-sda-irigasi'
          className='size-[97%] z-50'
          title='Earth Engine Iframe'
        />
      </div>
    </div>
  )
}
