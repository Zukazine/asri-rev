"use client"

import { SideBar } from "./sidebar"

interface GeoplatformLayoutProps {
  children: React.ReactNode
}

const GeoplatformLayout = ({
  children
}: GeoplatformLayoutProps) => {
  return(
    <div className="h-full">
      <div className="flex h-[calc(100vh-40px)]">
        <SideBar />
        {children}
      </div>
    </div>
  )  
}