
import "./pages.scss";
import websiteIcon from "../assets/websitedesign.png";
import mobileIcon from "../assets/mobiledesign.png";
import productIcon from "../assets/productdesign.png";

const Pages = () => {
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

  return (
    <div className="shortcuts">
      <div className="title">
        <h2>YOUR PAGES</h2>
        <span>See all</span>
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
