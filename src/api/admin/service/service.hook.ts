/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import { getServices } from "./service.api";

export const useGetServices = () => {
  const serviceData = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
    // select is used for minimizing field number in response per requirement
    select: (data) => {
      const services = data.data.map((item: any) => ({
        id: item._id,
        name: item.name,
        description: item.description,
        price: item.price,
      }));
      return services;
    },
    gcTime: 1000 * 60 * 10, // Sets the Cache time (for how long the data will be available in cache if user switch page) to 10 min (Default gcTime is 5 min)
    staleTime: 1000 * 30, // Sets the Stale time (After how long the data will be re-fetched) to 30 sec (Default staleTime is 0 sec)

    // staleTime: Infinity // Never refetch data
  });
  return serviceData;
};
