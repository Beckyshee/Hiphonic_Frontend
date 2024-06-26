import { useNavigate } from "react-router-dom";
import group1 from "../assets/Group1.png";
import group2 from "../assets/Group2.png";
import group3 from "../assets/Group3.png";
import "./groups.scss";

const Groups = () =>
{
  const navigate = useNavigate();
  const groups = [
    {
      name: "Design Enthusiast",
      icon: group1,
    },
    {
      name: "UI Official",
      icon: group2,
    },
    {
      name: "Web Designer",
      icon: group3,
    },
  ];

  const handleClick = () =>
  {
    navigate("/groups")
  }

  return (
    <div className="groups">
      <div className="title">
        <h2>GROUPS</h2>
        <span onClick={handleClick}>See all</span>
      </div>
      <div className="group-list">
        {groups &&
          groups.map((group, index) => (
            <div className="group" key={index}>
              <img src={group.icon} alt="no-icon" />
              <p>{group.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Groups;
