import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { FormEvent, useState } from "react";

const AddService = () => {
  const [serviceName, setServiceName] = useState();

  const { mutateAsync } = useMutation({
    mutationFn: async (data) => {
      return await fetch("http://localhost:5000/api/v1/services", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
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
    console.log("Done");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setServiceName(e.target.value)} />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default AddService;
