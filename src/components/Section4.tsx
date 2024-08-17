import { motion, MotionValue, useTransform } from "framer-motion";
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
import "../styles/Section4.scss";

const Section4 = ({
  scrolled,
  mScrolled,
}: {
  scrolled: number;
  mScrolled: MotionValue<number>;
}) => {
  const change_width_img = useTransform(
    mScrolled,
    [0.76, 0.87],
    ["500px", "150px"]
  );
  const change_font_size = useTransform(
    mScrolled,
    [0.76, 0.87],
    ["180px", "50px"]
  );

  return (
    <motion.div
      className="s4_main_div"
      style={{
        display: scrolled > 0.685 ? "flex" : "none",
      }}
    >
      <motion.div className="heading_div">
        <motion.p
          animate={{
            opacity: scrolled > 0.7115 && scrolled < 0.78 ? 1 : 0,
            y: scrolled > 0.7115 ? "-15px" : 0,
          }}
          transition={{ ease: "easeInOut", duration: 0.3 }}
        >
          Our international interiors
        </motion.p>
      </motion.div>
      <motion.div className="list_cities_div">
        <motion.div className="city_div">
          <motion.img
            src={background1}
            alt=""
            style={{
              width: change_width_img,
              x: "-30px",
              zIndex: 2,
            }}
            className="image"
          />
          <motion.p style={{ fontSize: change_font_size, zIndex: 3 }}>
            Paris
          </motion.p>
        </motion.div>
        <motion.div className="city_div">
          <motion.img
            src={background2}
            alt=""
            style={{
              width: change_width_img,
              x: "-30px",
              zIndex: 3,
            }}
            className="image"
          />
          <motion.p style={{ fontSize: change_font_size, zIndex: 4 }}>
            France
          </motion.p>
        </motion.div>
        <motion.div className="city_div">
          <motion.img
            src={background3}
            alt=""
            style={{
              width: change_width_img,
              x: "-30px",
              zIndex: 4,
            }}
            className="image"
          />
          <motion.p style={{ fontSize: change_font_size, zIndex: 5 }}>
            London
          </motion.p>
        </motion.div>
        <motion.div className="city_div">
          <motion.img
            src={background4}
            alt=""
            style={{
              width: change_width_img,
              x: "-30px",
              zIndex: 5,
            }}
            className="image"
          />
          <motion.p style={{ fontSize: change_font_size, zIndex: 6 }}>
            New York
          </motion.p>
        </motion.div>
        <motion.div className="city_div">
          <motion.img
            src={background5}
            alt=""
            style={{
              width: change_width_img,
              x: "-30px",
              zIndex: 6,
            }}
            className="image"
          />
          <motion.p style={{ fontSize: change_font_size, zIndex: 7 }}>
            Floridge
          </motion.p>
        </motion.div>
        <motion.div className="city_div">
          <motion.img
            src={background6}
            alt=""
            style={{
              width: change_width_img,
              x: "-30px",
              zIndex: 7,
            }}
            className="image"
          />
          <motion.p style={{ fontSize: change_font_size, zIndex: 8 }}>
            Chicago
          </motion.p>
        </motion.div>
        <motion.div className="city_div">
          <motion.img
            src={background7}
            alt=""
            style={{
              width: change_width_img,
              x: "-30px",
              zIndex: 8,
            }}
            className="image"
          />
          <motion.p style={{ fontSize: change_font_size, zIndex: 9 }}>
            Los Angeles
          </motion.p>
        </motion.div>
        <motion.div className="city_div">
          <motion.img
            src={background8}
            alt=""
            style={{
              width: change_width_img,
              x: "-30px",
              zIndex: 9,
            }}
            className="image"
          />
          <motion.p style={{ fontSize: change_font_size, zIndex: 10 }}>
            Capri
          </motion.p>
        </motion.div>
        <motion.div className="city_div">
          <motion.img
            src={background9}
            alt=""
            style={{
              width: change_width_img,
              x: "-30px",
              zIndex: 10,
            }}
            className="image"
          />
          <motion.p style={{ fontSize: change_font_size, zIndex: 11 }}>
            Bangkok
          </motion.p>
        </motion.div>
        <motion.div className="city_div">
          <motion.img
            src={background10}
            alt=""
            style={{
              width: change_width_img,
              x: "-30px",
              zIndex: 11,
            }}
            className="image"
          />
          <motion.p style={{ fontSize: change_font_size, zIndex: 12 }}>
            Hong Kong
          </motion.p>
        </motion.div>
        <motion.div className="city_div">
          <motion.img
            src={background11}
            alt=""
            style={{
              width: change_width_img,
              x: "-30px",
              zIndex: 12,
            }}
            className="image"
          />
          <motion.p style={{ fontSize: change_font_size, zIndex: 13 }}>
            New Delhi
          </motion.p>
        </motion.div>
        <motion.div className="city_div">
          <motion.img
            src={background12}
            alt=""
            style={{
              width: change_width_img,
              x: "-30px",
              zIndex: 13,
            }}
            className="image"
          />
          <motion.p style={{ fontSize: change_font_size, zIndex: 14 }}>
            Moscow
          </motion.p>
        </motion.div>
      </motion.div>
      {/* <div style={{ width: "100vw", height: "200px" }}></div> */}
    </motion.div>
  );
};

export default Section4;
