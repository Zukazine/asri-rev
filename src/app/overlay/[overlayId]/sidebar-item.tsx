'use client'

import { Button } from "@/components/ui/button";
import { MdOutlineLayers } from 'react-icons/md'
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { useShowLayer } from "@/features/overlay/store/useShowLayer"

interface SidebarItemProps {
  label: string;
  handleShow: () => void;
}

export const SidebarItem = ({
  label,
  handleShow,
}: SidebarItemProps) => {
  const [eye, setEye] = useState<boolean>(true)

  return (
    <Button 
      variant="transparent" 
      size="sm" 
      asChild 
      className= 'flex items-center justify-start font-normal h-7 px-[18px] py-4 text-sm overflow-hidden cursor-pointer text-[#f9edffcc]'
    >
      <div className="flex items-center justify-start">
          <MdOutlineLayers className="size-3.5 mr-1 shrink-0"/>
          <span className="text-sm truncate">{label}</span>
        <FaRegEye 
          onClick={() =>  {setEye(false); handleShow()}}
          className={!eye ? "hidden" : "shrink-0 ml-auto"}
        />
        <FaRegEyeSlash 
          onClick={() => {setEye(true); handleShow()}}
          className={!eye ? "shrink-0 ml-auto" : "hidden"}
        />
      </div>
    </Button>
  )
}