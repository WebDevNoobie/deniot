import logo_dark from "../assets/assignment_project_logo_dark.png";
import logo_light from "../assets/assignment_project_logo_light.png";
import "../styles/Header.scss";

const Header = ({ scrolled }: { scrolled: number }) => {
  return (
    <div className="header_main_div">
      <div className="logo_div">
        <img
          src={scrolled > 0.24 && scrolled < 0.32 ? logo_light : logo_dark}
          alt="logo_image"
        />
      </div>
      <div
        className="links_div"
        style={{
          color: scrolled > 0.24 && scrolled < 0.32 ? "white" : "black",
        }}
      >
        <p>Interior Design</p>
        <p>Architecture</p>
        <p>Furniture</p>
        <p>Q&A with JLD</p>
        <p>Books</p>
        <p>Instagram</p>
        <p>Contact</p>
      </div>
    </div>
  );
};

export default Header;
