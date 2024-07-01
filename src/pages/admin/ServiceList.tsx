/* eslint-disable @typescript-eslint/no-explicit-any */
import { getServices } from "@/api/admin/service/service.api";
import { useQuery } from "@tanstack/react-query";

const ServiceList = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
  });
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong!</p>;

  return (
    <div>
      {data.data.map((item: any, index: number) => (
        <h2 key={index}>{item.name}</h2>
      ))}
    </div>
  );
};

export default ServiceList;
