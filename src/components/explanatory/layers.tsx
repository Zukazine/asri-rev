import React from 'react'
import { OverlayIllustration } from './overlay-illustration'

export const Layers = () => {
  return (
    <div className="grid grid-cols-2 h-[300vh] relative">
      <div className="sticky top-0 left-0 w-full h-screen ">
        <div className="h-full flex items-center justify-center">
          <OverlayIllustration />
        </div>
      </div>
      <div className="w-full h-screen">
        <div className="grid grid-rows-3 ">
          <div className="text-white min-h-screen flex items-center justify-center">
            KONTEN 1
          </div>
          <div className="text-white min-h-screen flex items-center justify-center">
            KONTEN 2
          </div>
          <div className="text-white min-h-screen flex items-center justify-center">
            KONTEN 3
          </div>
        </div>
      </div>
    </div>
  )
}
