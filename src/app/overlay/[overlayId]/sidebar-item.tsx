'use client'

import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons/lib";
import { Button } from "@/components/ui/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { MdOutlineLayers } from 'react-icons/md'
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'


interface SidebarItemProps {
  label: string;
}

export const SidebarItem = ({
  label,
}: SidebarItemProps) => {
  const [hover, setHover] = useState<boolean>(false)
  const [show, setShow] = useState<boolean>(true)

  return (
    <Button 
      variant="transparent" 
      size="sm" 
      asChild 
      className= 'flex items-center justify-start font-normal h-7 px-[18px] py-4 text-sm overflow-hidden cursor-pointer text-[#f9edffcc]'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="flex justify-between">
        <div className="flex items-center justify-center gap-1.5">
          <MdOutlineLayers className="size-3.5 mr-1 shrink-0"/>
          <span className="text-sm truncate">{label}</span>  
        </div>
        <div
        >
        <>
          <FaRegEye 
            onClick={() => {setShow(false)}}
            className={!show ? "hidden" : ""}
          />
          <FaRegEyeSlash 
            onClick={() => {setShow(true)}}
            className={!show ? "" : "hidden"}
          />
        </>
        </div>
      </div>
    </Button>
  )
}