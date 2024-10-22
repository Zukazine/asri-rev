'use client'

import { useGetGeoplatform } from "@/features/geoplatforms/api/use-get-geoplatform"
import { useGeoplatformId } from "@/hooks/use-geoplatform-id"
import { AlertTriangle, HashIcon, Loader, MessageSquareText, SendHorizonal } from "lucide-react"
import { OverlaySection } from "./overlay-section"
import { SidebarItem } from "./sidebar-item"
import { OverlayHeader } from "./overlay-header"
import { Glasses } from "@/components/glasses"
import { RiBook3Line } from 'react-icons/ri'
import { BiRocket } from 'react-icons/bi'
import { usePathname } from "next/navigation"
import { useShowLayer } from "@/features/overlay/store/useShowLayer"

export const OverlaySidebar = () => {
  const pathname = usePathname()
  
  const [show, setShow] = useShowLayer()

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
        hint="New channel"
        onNew={() => {}}
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
      </OverlaySection>
      <Glasses className="z-1"/>
    </div>
  )
}