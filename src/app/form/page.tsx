'use client'

import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

const FormPage = () => {
  const [clicked, setClicked] = useState(false)
  const router = useRouter()

  const handleClick = () => {
    setClicked(true)
    setTimeout(() => {
      router.push('https://form-tagging.vercel.app/')
    }, 4000)
  }

  return (
    <div className="flex flex-col h-full w-full items-center justify-center gap-y-6">
      <motion.p 
        className="text-3xl font-bold text-left"
        animate={clicked ? {scale: 0, y: 300, opacity: 0 }: {}}
        transition={{ duration: 4 }}
      >
        UNDER MIGRATION ... 
      </motion.p>
      <motion.div
        animate={clicked ? { scale: 0, y: 250,  opacity: 0 } : {}}
        transition={{ duration: 4 }}
      >
        <Button
          variant={'default'}
          size={'default'}
          onClick={handleClick}
        >
          Form Lookup
        </Button>
      </motion.div>
      <motion.img
        src="/image/success.gif"
        className="size-[320px]"
        initial={{ scale: 1 }}
        animate={clicked ? { scale: 2.65, y: '-25%' } : {}}
        transition={{ duration: 6 }}
        style={{ zIndex: clicked ? 10 : 'auto' }}
      />
      <motion.img
        src="/image/form.jpg"
        className='absolute -z-[99999] scale-105 opacity-0'
        animate={clicked ? { opacity: 0.3 } : {}}
        transition={{ duration: 7 }}
      />
    </div>
  )
}

export default FormPage
