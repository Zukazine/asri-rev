import { Bell, Home, MessageSquare, MoreHorizontal } from "lucide-react"
import { SidebarButton } from "./sidebar-button"
import { usePathname } from "next/navigation"

export const SideBar = () => {
  const pathname = usePathname()

  return (
    <aside 
      className="w-[70px] h-full flex flex-col gap-y-4 items-center pt-[9px] pb-4 mx-2 mt-2 rounded-xl"
      style={{
        backgroundImage: "url('/image/gal-1.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}
    >
      <SidebarButton icon={Home} label={"Gio"} isActive={pathname.includes("/geoplatform")} />
      <SidebarButton icon={MessageSquare} label={"Ovy"} />
      <SidebarButton icon={Bell} label={"Formy"} />
      <SidebarButton icon={MoreHorizontal} label={"More"} />
    </aside>
  )
}