import useScrollGrow from "@/hooks/useScrollGrow";
import { motion } from "framer-motion";

const ChipSetReplacement = () => {
  const { componentRef, style } = useScrollGrow();
  return (
    <motion.div
      ref={componentRef}
      style={style}
      className="bg-light-gray h-[415px] rounded-lg col-span-6 lg:col-span-5"
    ></motion.div>
  );
};

export default ChipSetReplacement;
