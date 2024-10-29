'use client'

import { OverlaySection } from "./overlay-section"
import { SidebarItem } from "./sidebar-item"
import { OverlayHeader } from "./overlay-header"
import { Glasses } from "@/components/glasses"

export const OverlaySidebar = () => {
  return (
    <div 
      className="flex flex-col relative h-full group"
      style={{
        backgroundImage: "url('/image/gal-1.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundPositionX: '40%'
      }}
    >
      <OverlayHeader/>
      
      <OverlaySection
        label="Jatim Overlay"
      >
        <SidebarItem
          label={"SMI"}
        />
        <SidebarItem
          label={"WBI"}
        />
        <SidebarItem
          label={"VCI"}
        />
        <SidebarItem
          label={"VXCI"}
        />
        <SidebarItem
          label={"OII"}
        />
        <SidebarItem
          label={"DKI"}
        />
        <SidebarItem
          label={"DIY"}
        />
        <SidebarItem
          label={"NAD"}
        />
      </OverlaySection>
      <Glasses className="z-1"/>
    </div>
  )
}