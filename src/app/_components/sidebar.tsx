"use client"

import { Loader, MoreHorizontal } from "lucide-react"
import { SidebarButton } from "./sidebar-button"
import { usePathname } from "next/navigation"
import { LuLayers } from "react-icons/lu"
import { SiMaterialformkdocs } from "react-icons/si"
import { FaEarthAsia} from "react-icons/fa6"
import { UserButton } from "@/features/auth/components/user-button"
import { useGetGeoplatforms } from "@/features/geoplatforms/api/use-get-geoplatforms"
import { useMemo } from "react"

export const SideBar = () => {
  const pathname = usePathname()

  const { data: geoplatforms, isLoading: isGeoplatformsLoading } = useGetGeoplatforms()
  
  const geoplatformId = useMemo(() => geoplatforms?.[0]?._id, [geoplatforms])
  
  return (
    <aside 
      className={`${pathname === '/' || pathname === '/auth' ? "hidden" : "w-[70px]"} h-full flex flex-col gap-y-4 items-center pt-[9px] pb-4 mx-2 rounded-xl`}
      style={{
        backgroundImage: "url('/image/gal-1.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundPositionX: '-77%'
      }}
    >
      {isGeoplatformsLoading ? 
      <>
        <Loader 
          className="size-4 animate-spin"
        />
      </>
      : 
      <>
        <SidebarButton icon={FaEarthAsia} label={"Gio"} isActive={pathname.includes("/geoplatform")} link={`/geoplatform/${geoplatformId}/explanatory/1`}/>
        <SidebarButton icon={LuLayers} label={"Ovy"} isActive={pathname.includes("/overlay")} link='/overlay/1'/>
        <SidebarButton icon={SiMaterialformkdocs} label={"Formy"} isActive={pathname.includes("/form")} link="/form"/>
        <SidebarButton icon={MoreHorizontal} label={"More"} />
        <div className="flex flex-col items-center justify-center gap-y-1 mt-auto">
          <UserButton />
        </div>
      </>
      }
    </aside>
  )
}