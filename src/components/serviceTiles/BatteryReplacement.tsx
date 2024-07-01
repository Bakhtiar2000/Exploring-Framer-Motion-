import useScrollGrow from "@/hooks/useScrollGrow";
import { motion } from "framer-motion";

const BatteryReplacement = () => {
  const { componentRef, style } = useScrollGrow();
  return (
    <motion.div
      style={style}
      ref={componentRef}
      className="bg-light-gray h-[415px] rounded-lg col-span-12"
    ></motion.div>
  );
};

export default BatteryReplacement;
