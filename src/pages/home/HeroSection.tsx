import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import macBook from "@/assets/images/macbook-exposed.png";
import { motion } from "framer-motion";

const intro = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
      delayChildren: 1,
      staggerChildren: 0.5,
    },
  },
};

const introChildren = {
  hidden: { opacity: 0, y: -80 },
  visible: { opacity: 1, y: 0 },
};

const laptop = {
  initial: { y: 0, rotate: 0, scale: 5 },
  animate: {
    y: 40,
    rotate: -30,
    scale: 1,
    transition: {
      // transition applies to all the elements of the animate function.(rotate, scale, y )
      duration: 1,
      y: {
        // These properties are specifically accessible to y property only
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  },
};

const HeroSection = () => {
  return (
    <div className="overflow-hidden">
      <Container className="h-screen pt-16 grid lg:grid-cols-2 place-content-center">
        {/* height of HeroSection = Full view height - the navbar height(64px) */}

        {/* Left Text Div */}
        <motion.div variants={intro} initial="hidden" animate="visible">
          <motion.h1
            variants={introChildren}
            className="text-5xl text-nowrap lg:text-7xl font-bold"
          >
            <span className="text-gray">Don't Worry, </span>
            <br />
            <span>We'll fix it</span>
          </motion.h1>

          <motion.p
            variants={introChildren}
            className="text-dark-gray max-w-[50ch] mt-10 mb-5 text-lg"
          >
            Welcome to{" "}
            <span className="text-primary-foreground font-semibold">
              iRepair
            </span>
            , your one-stop place for all kinds of{" "}
            <span className="text-primary-foreground font-semibold">
              Macbook repairs
            </span>{" "}
            and diagnostics.
          </motion.p>

          <motion.div variants={introChildren}>
            <Button>Book a service</Button>
          </motion.div>
        </motion.div>

        {/* Right Laptop Picture */}
        <motion.div
          variants={laptop}
          initial="initial"
          animate="animate"
          className="flex justify-center mt-10"
        >
          <img
            className=" h-[95%] object-contain w-3/4 lg:w-full" //-rotate-[35deg]
            src={macBook}
            alt=""
          />
        </motion.div>
      </Container>
    </div>
  );
};

export default HeroSection;
