import { MotionValue, useTransform, motion } from "framer-motion";
import topb1 from "../assets/topb1.jpg";
import topb2 from "../assets/topb2.jpg";
import topb3 from "../assets/topb3.jpg";
import topb4 from "../assets/topb4.jpg";
import { useEffect, useState } from "react";
import "../styles/Section1.scss";

const Section1 = ({
  scrolled,
  mScrolled,
}: {
  scrolled: number;
  mScrolled: MotionValue<number>;
}) => {
  const vpw = visualViewport ? visualViewport.width : 0;
  const vph = visualViewport ? visualViewport.height : 0;
  const vpwp = vpw / vph;
  const vphp = vph / vpw;

  const [image, setImage] = useState(1);

  const widthChange1 = useTransform(
    mScrolled,
    [0.08, 0.159],
    ["400px", "550px"]
  );
  const widthChange2 = useTransform(
    mScrolled,
    [0.159, 0.161],
    ["550px", `${vpwp * 550}px`]
  );
  const widthChange3 = useTransform(
    mScrolled,
    [0.161, 0.29],
    [`${vpwp * 550}px`, `${vpw}px`]
  );
  const widthChange4 = useTransform(
    mScrolled,
    [0.159, 0.161],
    ["550px", "550px"]
  );
  const widthChange5 = useTransform(
    mScrolled,
    [0.161, 0.29],
    ["550px", `${vpw}px`]
  );
  const heightChange1 = useTransform(
    mScrolled,
    [0.08, 0.159],
    ["400px", "550px"]
  );
  const heightChange2 = useTransform(
    mScrolled,
    [0.159, 0.161],
    ["550px", "550px"]
  );
  const heightChange3 = useTransform(
    mScrolled,
    [0.161, 0.29],
    ["550px", `${vph}px`]
  );
  const heightChange4 = useTransform(
    mScrolled,
    [0.159, 0.161],
    ["550px", `${vphp * 550}px`]
  );
  const heightChange5 = useTransform(
    mScrolled,
    [0.161, 0.29],
    [`${vphp * 550}px`, `${vph}px`]
  );

  useEffect(() => {
    setTimeout(() => setImage(image === 4 ? 1 : image + 1), 2000);
  }, [image]);

  return (
    <motion.div
      className="s1_main_div"
      style={{
        display: scrolled >= 0.325 ? "none" : "block",
      }}
    >
      <motion.div
        className="content_div"
        animate={{ y: scrolled >= 0.315 ? `-${vph}px` : 0 }}
        transition={{ ease: "easeInOut", duration: 0.3 }}
      >
        <motion.div
          className="growing_content_div"
          style={{
            width:
              vpwp >= 1
                ? scrolled >= 0.159
                  ? scrolled >= 0.161
                    ? widthChange3
                    : widthChange2
                  : widthChange1
                : scrolled >= 0.159
                ? scrolled >= 0.161
                  ? widthChange5
                  : widthChange4
                : widthChange1,
            height:
              vpwp >= 1
                ? scrolled >= 0.159
                  ? scrolled >= 0.161
                    ? heightChange3
                    : heightChange2
                  : heightChange1
                : scrolled >= 0.159
                ? scrolled >= 0.161
                  ? heightChange5
                  : heightChange4
                : heightChange1,
          }}
        >
          <img
            src={
              image === 1
                ? topb1
                : image === 2
                ? topb2
                : image === 3
                ? topb3
                : topb4
            }
            alt="background_image"
          />
          <p>Design your life and dreams</p>
        </motion.div>
        <p>Design your life and dreams</p>
      </motion.div>
    </motion.div>
  );
};

export default Section1;
