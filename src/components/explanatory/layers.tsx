import React from 'react'

export const Layers = () => {
  return (
    <div className="grid grid-cols-2 h-[300vh] relative">
      <div className="sticky top-0 left-0 w-full h-screen">
        <div className="bg-red-300 h-full flex items-center justify-center">
          Nentod
        </div>
      </div>
      <div className="w-full h-screen">
        <div className="grid grid-rows-3">
          <div className="text-white bg-black min-h-screen">
            CIE 1
          </div>
          <div className="text-white bg-black min-h-screen">
            CIE 2
          </div>
          <div className="text-white bg-black min-h-screen">
            CIE 3
          </div>
        </div>
      </div>
    </div>
  )
}
