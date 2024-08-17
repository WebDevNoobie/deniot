import { motion, MotionValue, useInView, useTransform } from "framer-motion";
import background1 from "../assets/background1.png";
import background2 from "../assets/background2.png";
import background3 from "../assets/background3.png";
import background4 from "../assets/background4.png";
import background5 from "../assets/background5.png";
import background6 from "../assets/background6.png";
import background7 from "../assets/background7.png";
import background8 from "../assets/background8.png";
import background9 from "../assets/background9.png";
import background10 from "../assets/background10.png";
import background11 from "../assets/background11.png";
import background12 from "../assets/background12.png";
import background13 from "../assets/background13.png";
import background14 from "../assets/background14.png";
import background15 from "../assets/background15.png";
import background16 from "../assets/background16.png";
import background17 from "../assets/background17.png";
import background18 from "../assets/background18.png";
import background19 from "../assets/background19.png";
import background20 from "../assets/background20.png";
import background21 from "../assets/background21.png";
import background22 from "../assets/background22.png";
import background23 from "../assets/background23.png";
import background24 from "../assets/background24.png";
import background25 from "../assets/background25.png";
import background26 from "../assets/background26.png";
import background27 from "../assets/background27.png";
import background28 from "../assets/background28.png";
import { useRef } from "react";
import "../styles/Section3.scss";

const Section3 = ({
  scrolled,
  mScrolled,
}: {
  scrolled: number;
  mScrolled: MotionValue<number>;
}) => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const ref8 = useRef(null);
  const ref9 = useRef(null);
  const ref10 = useRef(null);
  const ref11 = useRef(null);
  const ref12 = useRef(null);
  const ref13 = useRef(null);
  const ref14 = useRef(null);
  const ref15 = useRef(null);
  const ref16 = useRef(null);
  const ref17 = useRef(null);
  const ref18 = useRef(null);
  const ref19 = useRef(null);
  const ref20 = useRef(null);
  const ref21 = useRef(null);
  const ref22 = useRef(null);
  const ref23 = useRef(null);
  const ref24 = useRef(null);
  const ref25 = useRef(null);
  const ref26 = useRef(null);
  const ref27 = useRef(null);
  const ref28 = useRef(null);
  const isInView1 = useInView(ref1, { amount: 0.2 });
  const isInView2 = useInView(ref2, { amount: 0.2 });
  const isInView3 = useInView(ref3, { amount: 0.2 });
  const isInView4 = useInView(ref4, { amount: 0.2 });
  const isInView5 = useInView(ref5, { amount: 0.2 });
  const isInView6 = useInView(ref6, { amount: 0.2 });
  const isInView7 = useInView(ref7, { amount: 0.2 });
  const isInView8 = useInView(ref8, { amount: 0.2 });
  const isInView9 = useInView(ref9, { amount: 0.2 });
  const isInView10 = useInView(ref10, { amount: 0.2 });
  const isInView11 = useInView(ref11, { amount: 0.2 });
  const isInView12 = useInView(ref12, { amount: 0.2 });
  const isInView13 = useInView(ref13, { amount: 0.2 });
  const isInView14 = useInView(ref14, { amount: 0.2 });
  const isInView15 = useInView(ref15, { amount: 0.2 });
  const isInView16 = useInView(ref16, { amount: 0.2 });
  const isInView17 = useInView(ref17, { amount: 0.2 });
  const isInView18 = useInView(ref18, { amount: 0.2 });
  const isInView19 = useInView(ref19, { amount: 0.2 });
  const isInView20 = useInView(ref20, { amount: 0.2 });
  const isInView21 = useInView(ref21, { amount: 0.2 });
  const isInView22 = useInView(ref22, { amount: 0.2 });
  const isInView23 = useInView(ref23, { amount: 0.2 });
  const isInView24 = useInView(ref24, { amount: 0.2 });
  const isInView25 = useInView(ref25, { amount: 0.2 });
  const isInView26 = useInView(ref26, { amount: 0.2 });
  const isInView27 = useInView(ref27, { amount: 0.2 });
  const isInView28 = useInView(ref28, { amount: 0.2 });
  const vpw = visualViewport ? visualViewport.width : 0;
  const vph = visualViewport ? visualViewport.height : 0;

  const x_axis_change_upper = useTransform(
    mScrolled,
    [0.45, 0.675],
    ["-3825px", `${vpw + 60}px`]
  );

  const x_axis_change_lower = useTransform(
    mScrolled,
    [0.45, 0.675],
    [`${vpw}px`, "-3885px"]
  );

  return (
    <motion.div
      className="s3_main_div"
      style={{
        display: scrolled > 0.44 && scrolled < 0.685 ? "flex" : "none",
      }}
    >
      <motion.div
        className="inner_upper_div"
        style={{
          top: `${vph / 2 - 190.58}px`,
          x: x_axis_change_upper,
        }}
      >
        <div className="div">
          <motion.img
            src={background1}
            alt=""
            animate={{
              transform: isInView1 ? "none" : "rotate(-3deg) translateX(-50px)",
            }}
            ref={ref1}
          />
          <p>Waldorf Astoria Residences</p>
        </div>
        <div className="div">
          <motion.img
            src={background2}
            alt=""
            animate={{
              transform: isInView2 ? "none" : "rotate(-3deg) translateX(-50px)",
            }}
            ref={ref2}
          />
          <p>Waldorf Astoria Residences</p>
        </div>
        <div className="div">
          <motion.img
            src={background3}
            alt=""
            animate={{
              transform: isInView3 ? "none" : "rotate(-3deg) translateX(-50px)",
            }}
            ref={ref3}
          />
          <p>Waldorf Astoria Residences</p>
        </div>
        <div className="div">
          <motion.img
            src={background4}
            alt=""
            animate={{
              transform: isInView4 ? "none" : "rotate(-3deg) translateX(-50px)",
            }}
            ref={ref4}
          />
          <p>Waldorf Astoria Residences</p>
        </div>
        <div className="div">
          <motion.img
            src={background5}
            alt=""
            animate={{
              transform: isInView5 ? "none" : "rotate(-3deg) translateX(-50px)",
            }}
            ref={ref5}
          />
          <p>Waldorf Astoria Residences</p>
        </div>
        <div className="div">
          <motion.img
            src={background6}
            alt=""
            animate={{
              transform: isInView6 ? "none" : "rotate(-3deg) translateX(-50px)",
            }}
            ref={ref6}
          />
          <p>Waldorf Astoria Residences</p>
        </div>
        <div className="div">
          <motion.img
            src={background7}
            alt=""
            animate={{
              transform: isInView7 ? "none" : "rotate(-3deg) translateX(-50px)",
            }}
            ref={ref7}
          />
          <p>Waldorf Astoria Residences</p>
        </div>
        <div className="div">
          <motion.img
            src={background8}
            alt=""
            animate={{
              transform: isInView8 ? "none" : "rotate(-3deg) translateX(-50px)",
            }}
            ref={ref8}
          />
          <p>Waldorf Astoria Residences</p>
        </div>
        <div className="div">
          <motion.img
            src={background9}
            alt=""
            animate={{
              transform: isInView9 ? "none" : "rotate(-3deg) translateX(-50px)",
            }}
            ref={ref9}
          />
          <p>Waldorf Astoria Residences</p>
        </div>
        <div className="div">
          <motion.img
            src={background10}
            alt=""
            animate={{
              transform: isInView10
                ? "none"
                : "rotate(-3deg) translateX(-50px)",
            }}
            ref={ref10}
          />
          <p>Waldorf Astoria Residences</p>
        </div>
        <div className="div">
          <motion.img
            src={background11}
            alt=""
            animate={{
              transform: isInView11
                ? "none"
                : "rotate(-3deg) translateX(-50px)",
            }}
            ref={ref11}
          />
          <p>Waldorf Astoria Residences</p>
        </div>
        <div className="div">
          <motion.img
            src={background12}
            alt=""
            animate={{
              transform: isInView12
                ? "none"
                : "rotate(-3deg) translateX(-50px)",
            }}
            ref={ref12}
          />
          <p>Waldorf Astoria Residences</p>
        </div>
        <div className="div">
          <motion.img
            src={background13}
            alt=""
            animate={{
              transform: isInView13
                ? "none"
                : "rotate(-3deg) translateX(-50px)",
            }}
            ref={ref13}
          />
          <p>Waldorf Astoria Residences</p>
        </div>
        <div className="div">
          <motion.img
            src={background14}
            alt=""
            animate={{
              transform: isInView14
                ? "none"
                : "rotate(-3deg) translateX(-50px)",
            }}
            ref={ref14}
          />
          <p>Waldorf Astoria Residences</p>
        </div>
        {/* <motion.img
          src={background1}
          alt=""
          animate={{
            transform: isInView1 ? "none" : "rotate(-3deg) translateX(-50px)",
          }}
          ref={ref1}
        />
        <motion.img
          src={background2}
          alt=""
          animate={{
            transform: isInView2 ? "none" : "rotate(-3deg) translateX(-50px)",
          }}
          ref={ref2}
        />
        <motion.img
          src={background3}
          alt=""
          animate={{
            transform: isInView3 ? "none" : "rotate(-3deg) translateX(-50px)",
          }}
          ref={ref3}
        />
        <motion.img
          src={background4}
          alt=""
          animate={{
            transform: isInView4 ? "none" : "rotate(-3deg) translateX(-50px)",
          }}
          ref={ref4}
        />
        <motion.img
          src={background5}
          alt=""
          animate={{
            transform: isInView5 ? "none" : "rotate(-3deg) translateX(-50px)",
          }}
          ref={ref5}
        />
        <motion.img
          src={background6}
          alt=""
          animate={{
            transform: isInView6 ? "none" : "rotate(-3deg) translateX(-50px)",
          }}
          ref={ref6}
        />
        <motion.img
          src={background7}
          alt=""
          animate={{
            transform: isInView7 ? "none" : "rotate(-3deg) translateX(-50px)",
          }}
          ref={ref7}
        />
        <motion.img
          src={background8}
          alt=""
          animate={{
            transform: isInView8 ? "none" : "rotate(-3deg) translateX(-50px)",
          }}
          ref={ref8}
        />
        <motion.img
          src={background9}
          alt=""
          animate={{
            transform: isInView9 ? "none" : "rotate(-3deg) translateX(-50px)",
          }}
          ref={ref9}
        />
        <motion.img
          src={background10}
          alt=""
          animate={{
            transform: isInView10 ? "none" : "rotate(-3deg) translateX(-50px)",
          }}
          ref={ref10}
        />
        <motion.img
          src={background11}
          alt=""
          animate={{
            transform: isInView11 ? "none" : "rotate(-3deg) translateX(-50px)",
          }}
          ref={ref11}
        />
        <motion.img
          src={background12}
          alt=""
          animate={{
            transform: isInView12 ? "none" : "rotate(-3deg) translateX(-50px)",
          }}
          ref={ref12}
        />
        <motion.img
          src={background13}
          alt=""
          animate={{
            transform: isInView13 ? "none" : "rotate(-3deg) translateX(-50px)",
          }}
          ref={ref13}
        />
        <motion.img
          src={background14}
          alt=""
          animate={{
            transform: isInView14 ? "none" : "rotate(-3deg) translateX(-50px)",
          }}
          ref={ref14}
        /> */}
      </motion.div>
      <motion.div
        className="inner_lower_div"
        style={{
          top: `${vph / 2 + 25}px`,
          x: x_axis_change_lower,
        }}
      >
        <motion.img
          src={background15}
          alt=""
          animate={{
            transform: isInView15 ? "none" : "rotate(3deg) translateX(50px)",
          }}
          ref={ref15}
        />
        <motion.img
          src={background16}
          alt=""
          animate={{
            transform: isInView16 ? "none" : "rotate(3deg) translateX(50px)",
          }}
          ref={ref16}
        />
        <motion.img
          src={background17}
          alt=""
          animate={{
            transform: isInView17 ? "none" : "rotate(3deg) translateX(50px)",
          }}
          ref={ref17}
        />
        <motion.img
          src={background18}
          alt=""
          animate={{
            transform: isInView18 ? "none" : "rotate(3deg) translateX(50px)",
          }}
          ref={ref18}
        />
        <motion.img
          src={background19}
          alt=""
          animate={{
            transform: isInView19 ? "none" : "rotate(3deg) translateX(50px)",
          }}
          ref={ref19}
        />
        <motion.img
          src={background20}
          alt=""
          animate={{
            transform: isInView20 ? "none" : "rotate(3deg) translateX(50px)",
          }}
          ref={ref20}
        />
        <motion.img
          src={background21}
          alt=""
          animate={{
            transform: isInView21 ? "none" : "rotate(3deg) translateX(50px)",
          }}
          ref={ref21}
        />
        <motion.img
          src={background22}
          alt=""
          animate={{
            transform: isInView22 ? "none" : "rotate(3deg) translateX(50px)",
          }}
          ref={ref22}
        />
        <motion.img
          src={background23}
          alt=""
          animate={{
            transform: isInView23 ? "none" : "rotate(3deg) translateX(50px)",
          }}
          ref={ref23}
        />
        <motion.img
          src={background24}
          alt=""
          animate={{
            transform: isInView24 ? "none" : "rotate(3deg) translateX(50px)",
          }}
          ref={ref24}
        />
        <motion.img
          src={background25}
          alt=""
          animate={{
            transform: isInView25 ? "none" : "rotate(3deg) translateX(50px)",
          }}
          ref={ref25}
        />
        <motion.img
          src={background26}
          alt=""
          animate={{
            transform: isInView26 ? "none" : "rotate(3deg) translateX(50px)",
          }}
          ref={ref26}
        />
        <motion.img
          src={background27}
          alt=""
          animate={{
            transform: isInView27 ? "none" : "rotate(3deg) translateX(50px)",
          }}
          ref={ref27}
        />
        <motion.img
          src={background28}
          alt=""
          animate={{
            transform: isInView28 ? "none" : "rotate(3deg) translateX(50px)",
          }}
          ref={ref28}
        />
      </motion.div>
    </motion.div>
  );
};

export default Section3;
