import { useParams } from "next/navigation";

import { Id } from "../../convex/_generated/dataModel";

export const useGeoplatformId = () => {
  const params = useParams()
  return params.geoplatformId as Id<"geoplatforms"> 
}