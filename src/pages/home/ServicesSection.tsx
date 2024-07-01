import BatteryReplacement from "@/components/serviceTiles/BatteryReplacement";
import ChipSetReplacement from "@/components/serviceTiles/ChipSetReplacement";
import DataRecovery from "@/components/serviceTiles/DataRecovery";
import Container from "@/components/ui/Container";

const ServicesSection = () => {
  return (
    <Container className="my-40">
      {/* Title */}
      <div className="flex flex-col justify-center items-center">
        <h1> Services that we provide</h1>
        <p className="max-w-[80ch] mt-10 mb-20">
          We provide various computer repair services and solutions for our new
          and regular customers. Feel free to find out more below.
        </p>
      </div>

      {/* Seven Div */}
      <div className="grid grid-cols-12 gap-[20px]">
        <BatteryReplacement />
        <ChipSetReplacement />
        <DataRecovery />
        <div className="bg-light-gray h-[415px] rounded-lg col-span-12"></div>
        <div className="bg-light-gray h-[415px] rounded-lg col-span-12 lg:col-span-4"></div>
        <div className="bg-light-gray h-[415px] rounded-lg col-span-12 lg:col-span-4"></div>
        <div className="bg-light-gray h-[415px] rounded-lg col-span-12 lg:col-span-4"></div>
      </div>
    </Container>
  );
};

export default ServicesSection;
