
import "./pages.scss";
import websiteIcon from "../assets/websitedesign.png";
import mobileIcon from "../assets/mobiledesign.png";
import productIcon from "../assets/productdesign.png";
import { useNavigate } from "react-router-dom";

const Pages = () =>
{
 const navigate = useNavigate()
  const shortcuts = [
    {
      icon: websiteIcon,
      title: "Website Design",
    },
    {
      icon: mobileIcon,
      title: "Mobile Design",
    },
    {
      icon: productIcon,
      title: "Product Design",
    },
  ];

  const handleClick = () =>
  {
    navigate("/events")
  }

  return (
    <div className="shortcuts">
      <div className="title">
        <h2>YOUR PAGES</h2>
        <span onClick={handleClick}>See all</span>
      </div>
      <div className="page-list">
        {shortcuts &&
          shortcuts.map((item, index) => {
            return (
              <div className="shortcut" key={index}>
                <img src={item.icon} alt="no-icon" />
                {item.title}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Pages;
