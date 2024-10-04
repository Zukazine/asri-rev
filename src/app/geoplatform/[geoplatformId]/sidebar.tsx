"use client"

import { MoreHorizontal } from "lucide-react"
import { SidebarButton } from "./sidebar-button"
import { usePathname } from "next/navigation"
import { LuLayers } from "react-icons/lu"
import { SiMaterialformkdocs } from "react-icons/si"
import { FaEarthAsia} from "react-icons/fa6"
import { UserItem } from "./user-item"
import { UserButton } from "@/features/auth/components/user-button"

export const SideBar = () => {
  const pathname = usePathname()

  return (
    <aside 
      className="w-[70px] h-full flex flex-col gap-y-4 items-center pt-[9px] pb-4 mx-2 rounded-xl"
      style={{
        backgroundImage: "url('/image/gal-1.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundPositionX: '-77%'
      }}
    >
      <SidebarButton icon={FaEarthAsia} label={"Gio"} isActive={pathname.includes("/geoplatform")} />
      <SidebarButton icon={LuLayers} label={"Ovy"} />
      <SidebarButton icon={SiMaterialformkdocs} label={"Formy"} />
      <SidebarButton icon={MoreHorizontal} label={"More"} />
      <div className="flex flex-col items-center justify-center gap-y-1 mt-auto">
        <UserButton />
      </div>
    </aside>
  )
}