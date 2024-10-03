import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";

interface useGetGeoplatformProps {
  id: Id<"geoplatforms">
}

export const useGetGeoplatform = ({id}: useGetGeoplatformProps) => {
  const data = useQuery(api.geoplatforms.getById, { id })
  const isLoading = data === undefined

  return { data, isLoading }
}