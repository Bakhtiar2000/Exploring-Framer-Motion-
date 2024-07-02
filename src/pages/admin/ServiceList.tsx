/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetServices } from "@/api/admin/service/service.hook";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Trash2 } from "lucide-react";
import { FormEvent, useState } from "react";

const ServiceList = () => {
  const { data: services, isLoading, isError } = useGetServices();
  const [serviceName, setServiceName] = useState("");
  const queryClient = useQueryClient();

  const { mutateAsync, isSuccess } = useMutation({
    mutationFn: async (data) => {
      return await fetch("http://localhost:5000/api/v1/services", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["services"] }); // For real time refetching
    },
  });
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const serviceData = {
      name: serviceName,
      description: "New Service",
      devices: ["Macbook pro", "Macbook air", "ipod air"],
      price: 430,
    };

    await mutateAsync(serviceData);
    console.log(isSuccess && "Done");
  };
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong!</p>;

  {
    /* {data.data.map((item: any, index: number) => (
    <h2 key={index}>{item.name}</h2>
  ))} */
  }
  return (
    <Container className="mt-20 border p-0 rounded-2xl">
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>DEscription</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {services.map((service: any) => (
            <TableRow key={service.id}>
              <TableCell className="font-medium">{service.name}</TableCell>
              <TableCell>{service.description}</TableCell>
              <TableCell>{service.price}</TableCell>
              <TableCell className="text-right">
                <Button variant="destructive" className="px-1.5 size-8">
                  <Trash2 />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total Services</TableCell>
            <TableCell className="text-right">{services.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      <form onSubmit={handleSubmit}>
        <h2 className="px-5 my-5 font-semibold">Add another Service</h2>
        <input
          placeholder="name"
          className="border border-green-500 rounded mx-5 px-2"
          type="text"
          onChange={(e) => setServiceName(e.target.value)}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Container>
  );
};

export default ServiceList;
