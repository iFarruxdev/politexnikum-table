import "./Home.css";
import SchoolIcon from '@mui/icons-material/School';
import GroupIcon from '@mui/icons-material/Group';
import PlaceIcon from '@mui/icons-material/Place';
import StarIcon from '@mui/icons-material/Star';
import Diagramma from "../../components/Diagramma/Diagramma";
import Analytics from "../../components/Analytics/Analytics";

const Home = () => {
  return <div>
    <section className="home-header-section">
    {/* <h1>Home Section</h1> */}
    <ul className="index-home-list">
      <div className="index-home-item-wrapper">
      <li className="home-item home-item-1">
        <span className="home-item-content">
          <h3 className="home-item-content-heading">O'qituvchilar</h3>
          <h4 className="home-item-content-value font-bold">68</h4>
        </span>
        <span className="home-item-image home-item-image-1">
          <SchoolIcon sx={{fontSize:'28px'}} />
        </span>
      </li>
      <li className="home-item home-item-2">
        <span className="home-item-content">
          <h3 className="home-item-content-heading">Talabalar</h3>
          <h4 className="home-item-content-value font-bold">38</h4>
        </span>
        <span className="home-item-image home-item-image-2">
          <GroupIcon sx={{fontSize:'28px'}} />
        </span>
      </li>
      <li className="home-item home-item-3">
        <span className="home-item-content">
          <h3 className="home-item-content-heading">Yo'nalishlar</h3>
          <h4 className="home-item-content-value font-bold">20</h4>
        </span>
        <span className="home-item-image home-item-image-3">
          <PlaceIcon sx={{fontSize:'28px'}} />
        </span>
      </li>
      <li className="home-item home-item-4">
        <span className="home-item-content">
          <h3 className="home-item-content-heading">Masterlar</h3>
          <h4 className="home-item-content-value font-bold">18</h4>
        </span>
        <span className="home-item-image home-item-image-4">
          <StarIcon sx={{fontSize:'28px'}} />
        </span>
      </li>
      </div>
    </ul>
  </section>
  <section className="home-diagramms">
   <Analytics className="analytics" />
   <Diagramma />
  </section>
  </div>;
};

export default Home;