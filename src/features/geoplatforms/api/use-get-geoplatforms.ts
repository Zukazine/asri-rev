import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";

export const useGetGeoplatforms = () => {
  const data = useQuery(api.geoplatforms.get)
  const isLoading = data === undefined

  return { data, isLoading }
}