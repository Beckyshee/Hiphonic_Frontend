
import "./rightSidebar.scss";
import Pages from "./Pages";
import Contacts from "./Contacts";
import Groups from "./Groups";

const Rightbar = () => {
  return (
    <div className="right-bar">
      <div className="your-pages">
        <Pages />
      </div>
      <Contacts />
      <Groups />
    </div>
  );
};

export default Rightbar;
