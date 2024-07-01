import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import macBook from "@/assets/images/macbook-exposed.png";

const HeroSection = () => {
  return (
    <Container className="h-[calc(100vh-64px)] grid grid-cols-2 place-content-center">
      {/* height of HeroSection = Full view height - the navbar height(64px) */}
      <div>
        <h1 className="text-8xl font-bold">
          <span className="text-gray">Don't Worry, </span>
          <br />
          <span>We'll fix it</span>
        </h1>

        <p>
          Welcome to <span>iRepair</span>, your one-stop place for all kinds of{" "}
          <span>Macbook repairs</span> and diagnostics.
        </p>
        <Button>Book a service</Button>
      </div>
      <div>
        <img src={macBook} alt="" />
      </div>
    </Container>
  );
};

export default HeroSection;
