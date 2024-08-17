import { motion, MotionValue, useInView, useTransform } from "framer-motion";
import background1 from "../assets/background1.jpg";
import { useRef } from "react";

const TestSection = ({ mScrolled }: { mScrolled: MotionValue<number> }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  const vpw = visualViewport ? visualViewport.width : 0;
  const vph = visualViewport ? visualViewport.height : 0;

  const x_axis_change_upper = useTransform(
    mScrolled,
    [0.341, 0.4],
    ["-3825px", `${vpw + 60}px`]
  );

  const x_axis_change_lower = useTransform(
    mScrolled,
    [0.341, 0.4],
    [`${vpw}px`, "-3885px"]
  );

  return (
    <motion.div
      className="main_div3"
      style={{
        width: "100vw",
        height: "140vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        gap: "50px",
        // overflowX: "hidden",
        // justifyContent: "center",
      }}
    >
      <motion.div
        className="inner_upper_div"
        style={{
          position: "sticky",
          top: `${vph / 2 - 190.58}px`,
          x: x_axis_change_upper,
          display: "flex",
          gap: "25px",
          //   overflow: "clip",
        }}
      >
        {[...Array(14)].map(() => (
          <motion.img
            src={background1}
            alt=""
            style={{ width: "250px" }}
            animate={{
              transform: isInView ? "none" : "rotate(-3deg) translateX(-50px)",
            }}
            ref={ref}
          />
        ))}
      </motion.div>
      <motion.div
        className="inner_lower_div"
        style={{
          position: "sticky",
          top: `${vph / 2 + 25}px`,
          x: x_axis_change_lower,
          display: "flex",
          gap: "25px",
          //   overflow: "visible",
        }}
      >
        {[...Array(14)].map(() => (
          <motion.img
            src={background1}
            alt=""
            style={{ width: "250px" }}
            animate={{
              transform: isInView ? "none" : "rotate(-3deg) translateX(-50px)",
            }}
            ref={ref}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default TestSection;
