import { useGetGeoplatform } from "@/features/geoplatforms/api/use-get-geoplatform"
import { useGeoplatformId } from "@/hooks/use-geoplatform-id"
import { AlertTriangle, Loader, MessageSquareText, SendHorizonal } from "lucide-react"
import { GeoplatformSection } from "./geoplatform-section"
import { SidebarItem } from "./sidebar-item"
import { GeoplatformHeader } from "./geoplatform-header"

export const GeoplatformSidebar = () => {
  const geoplatformId = useGeoplatformId()

  const { data: geoplatform, isLoading: geoplatformLoading} = useGetGeoplatform({ id: geoplatformId })

  if (geoplatformLoading) {
    return (
      <div className="flex flex-col bg-[#5E2c5F] h-full items-center justify-center">
        <Loader className="size-5 animate-spin text-white"/>
      </div>
    )
  }

  if (!geoplatform) {
    return (
      <div className="flex flex-col gap-y-2 bg-[#5E2c5F] h-full items-center justify-center">
        <AlertTriangle className="size-5 text-white"/>
        <p className="text-white text-sm">
          Geoplatform not found
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-col bg-[#5E2c5F] h-full">
      <GeoplatformHeader geoplatform={geoplatform} isAdmin={true}/>
      <div className="flex flex-col px-2 mt-3">
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
        label="Channels"
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
        <></>
      </GeoplatformSection>
      <GeoplatformSection
        label="Direct Messages"
        hint="New direct message"
        onNew={() => {}}
      >
        {/* {members?.map((item) => (
          <UserItem 
            key={1}
            id={item._id}
            label={item.user.name}
            image = {item.user.image}
          />
        ))} */}
        <></>
      </GeoplatformSection>
    </div>
  )
}