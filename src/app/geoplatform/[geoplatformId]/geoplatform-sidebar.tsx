import { useGetGeoplatform } from "@/features/geoplatforms/api/use-get-geoplatform"
import { useGeoplatformId } from "@/hooks/use-geoplatform-id"
import { AlertTriangle, Loader } from "lucide-react"

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
    <div>
      
    </div>
  )
}