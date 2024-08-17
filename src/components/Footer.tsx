import topb3 from "../assets/topb3.jpg";
import "../styles/Footer.scss";

const Footer = () => {
  const vph = visualViewport ? visualViewport.height : 0;
  return (
    <div
      className="footer_main_div"
      style={{
        top: `${10 * vph - 0.8 * vph}px`,
      }}
    >
      <div className="inner_upper_div">
        <div className="img_div">
          <img src={topb3} alt="" />
          <p>Interior Design</p>
        </div>
        <p>Interior Design</p>
      </div>
      <div className="inner_lower_div">
        <p>Books</p>
        <p>Press Room</p>
        <p>Private</p>
        <p>Legal Notice</p>
        <p>Instagram</p>
        <p>Contact</p>
      </div>
    </div>
  );
};

export default Footer;
