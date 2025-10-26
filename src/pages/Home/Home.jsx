import "./Home.css";
import SchoolIcon from '@mui/icons-material/School';
import GroupIcon from '@mui/icons-material/Group';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import TableViewIcon from '@mui/icons-material/TableView';

const Home = () => {
  return <section className="home-section">
    {/* <h1>Home Section</h1> */}
    <ul className="index-home-list">
      <li className="index-home-item-wrapper">
      <li className="home-item home-item-1">
        <span className="home-item-content">
          <h3 className="home-item-content-heading">Jami O'qituvchilar</h3>
          <h4 className="home-item-content-value">68</h4>
        </span>
        <span className="home-item-image home-item-image-1">
          <SchoolIcon sx={{fontSize:'28px'}} />
        </span>
      </li>
      <li className="home-item home-item-2">
        <span className="home-item-content">
          <h3 className="home-item-content-heading">Jami Guruhlar</h3>
          <h4 className="home-item-content-value">38</h4>
        </span>
        <span className="home-item-image home-item-image-2">
          <GroupIcon sx={{fontSize:'28px'}} />
        </span>
      </li>
      <li className="home-item home-item-3">
        <span className="home-item-content">
          <h3 className="home-item-content-heading">Jami Fanlar</h3>
          <h4 className="home-item-content-value">20</h4>
        </span>
        <span className="home-item-image home-item-image-3">
          <MenuBookIcon sx={{fontSize:'28px'}} />
        </span>
      </li>
      <li className="home-item home-item-4">
        <span className="home-item-content">
          <h3 className="home-item-content-heading">Jami Jadvallar</h3>
          <h4 className="home-item-content-value">18</h4>
        </span>
        <span className="home-item-image home-item-image-4">
          <TableViewIcon sx={{fontSize:'28px'}} />
        </span>
      </li>
      </li>
    </ul>
  </section>;
};

export default Home;
