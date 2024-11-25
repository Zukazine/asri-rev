import React from 'react'

interface DescriptiveProps {
  logo: string,
  title: string,
  image?: string,
  description: string
}

export const Descriptive = ({
  logo,
  title,
  image,
  description
}: DescriptiveProps) => {
  return (
    <div className='grid grid-cols-2'>
      <div className='h-screen w-full flex flex-col items-center justify-center'>
        <div className='flex items-center justify-center size-2/3'>
          <img
            src={logo}
          />
        </div>
      </div>
      <div className='h-screen w-full flex flex-col justify-center gap-6'>
        <p className='text-4xl font-bold font-gilroy text-gray-600'># {title}</p>
        {image && 
          <>
            <img
              src={image}
              className='rounded-3xl w-[90%]'
            /> 
          </>
        }
        <p className='text-[15px] w-[90%] text-gray-600'>{description}</p>
      </div>
    </div>
  )
}
