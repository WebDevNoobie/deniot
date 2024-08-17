import "./styles/App.scss";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";

function App() {
  const [scrolled, setScrolled] = useState(0);
  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrolled(latest);
    console.log(latest);
  });
  return (
    <motion.div
      className="main_div"
      style={{
        width: "100vw",
        height: "1000vh",
        backgroundColor: "#F2F2F2",
        position: "relative",
        overflow: "clip",
      }}
    >
      <Cursor />
      <Header scrolled={scrolled} />
      <Section1 scrolled={scrolled} mScrolled={scrollYProgress} />
      <Section2 scrolled={scrolled} />
      <Section3 scrolled={scrolled} mScrolled={scrollYProgress} />
      <Section4 scrolled={scrolled} mScrolled={scrollYProgress} />
      <Footer />
    </motion.div>
  );
}

export default App;
