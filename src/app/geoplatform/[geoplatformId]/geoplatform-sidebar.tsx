'use client'

import { useGetGeoplatform } from "@/features/geoplatforms/api/use-get-geoplatform"
import { useGeoplatformId } from "@/hooks/use-geoplatform-id"
import { AlertTriangle, HashIcon, Loader, MessageSquareText, SendHorizonal } from "lucide-react"
import { GeoplatformSection } from "./geoplatform-section"
import { SidebarItem } from "./sidebar-item"
import { GeoplatformHeader } from "./geoplatform-header"
import { Glasses } from "@/components/glasses"
import { RiBook3Line } from 'react-icons/ri'
import { BiRocket } from 'react-icons/bi'
import { usePathname } from "next/navigation"

export const GeoplatformSidebar = () => {
  const pathname = usePathname()
  const geoplatformId = useGeoplatformId()
  
  const { data: geoplatform, isLoading: geoplatformLoading} = useGetGeoplatform({ id: geoplatformId })
  
  if (geoplatformLoading) {
    return (
      <div 
        className="flex flex-col h-full items-center justify-center"
        style={{
          backgroundImage: "url('/image/gal-1.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundPositionX: '40%'
        }}
      >
        <Loader className="size-5 animate-spin text-white"/>
      </div>
    )
  }

  if (!geoplatform) {
    return (
      <div 
        className="flex flex-col gap-y-2 h-full items-center justify-center bg-black"
        style={{
          backgroundImage: "url('/image/gal-1.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundPositionX: '40%'
        }}
      >
        <AlertTriangle className="size-5 text-white"/>
        <p className="text-white text-sm">
          Geoplatform not found
        </p>
      </div>
    )
  }

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
      <GeoplatformHeader geoplatform={geoplatform} isAdmin={true}/>
      <div className="flex flex-col px-2 mt-3 z-10">
        <SidebarItem 
          label="Threads"
          icon={MessageSquareText}
          id="threads"
        />
        <SidebarItem 
          label="Drafts & Sent"
          icon={SendHorizonal}
          id="drafts"
        />
      </div>
      <GeoplatformSection
        label="Irigasi-Research"
        hint="New channel"
        onNew={() => {}}
      >
        {/* {channels?.map((item) => (
          <SidebarItem 
            key={item._id}
            icon={HashIcon}
            label={item.name}
            id={item._id}
            variant={channelId === item._id ? "active" : "default"}
          />
        ))} */}
        <SidebarItem
          icon={RiBook3Line}
          label={"Explanatory"}
          id={'123123'}
          variant={pathname.includes("/explanatory") ? "active" : "default"}
          type="Explanatory"
        />
        <SidebarItem
          icon={BiRocket}
          label={"Story : Validasi Model"}
          id={'123123'}
          type='Story'
          variant={pathname.includes("/story") ? "active" : "default"}
        />
      </GeoplatformSection>
      <Glasses className="z-1"/>
    </div>
  )
}