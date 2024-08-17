import { motion } from "framer-motion";
import "../styles/Section2.scss";

const Section2 = ({ scrolled }: { scrolled: number }) => {
  return (
    <motion.div
      className="s2_main_div"
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        display: scrolled > 0.325 && scrolled <= 0.44 ? "flex" : "none",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        className="heading_div"
        animate={{
          opacity: scrolled > 0.34 && scrolled < 0.42 ? 1 : 0,
          y: scrolled > 0.34 ? "-25px" : 0,
        }}
        transition={{ ease: "easeInOut", duration: 0.3 }}
      >
        <p>Jean-Louis Deniot</p>
      </motion.div>
    </motion.div>
  );
};

export default Section2;
