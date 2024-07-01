import useScrollGrow from "@/hooks/useScrollGrow";
import { motion } from "framer-motion";

const DataRecovery = () => {
  const { componentRef, style } = useScrollGrow();
  return (
    <motion.div
      ref={componentRef}
      style={style}
      className="bg-light-gray h-[415px] rounded-lg col-span-6 lg:col-span-7"
    ></motion.div>
  );
};

export default DataRecovery;
