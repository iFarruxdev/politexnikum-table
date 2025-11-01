import './SideBar.css'
import HomeIcon from '@mui/icons-material/Home';
import TableViewIcon from '@mui/icons-material/TableView';
import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
  return (
    <section className="admin-sidebar">
       <ul className="index-home-list">
      <div className="index-home-item-wrapper">
      <NavLink to='adnHome' className="home-item admin-item home-item-1 admin-item">
        <span className="home-item-content">
          <h3 className="home-item-content-heading admin-item-heading">Bosh sahifa</h3>
        </span>
        <span className="home-item-image home-item-image-admin home-item-image-1">
          <HomeIcon sx={{fontSize:'25px'}} />
        </span>
      </NavLink>
      <NavLink to='adnSchedule' className="home-item admin-item home-item-2">
        <span className="home-item-content">
          <h3 className="home-item-content-heading admin-item-heading">Dars jadvali</h3>
        </span>
        <span className="home-item-image home-item-image-admin home-item-image-2">
          <TableViewIcon sx={{fontSize:'25px'}} />
        </span>
      </NavLink>
      <NavLink to='adnTeachers' className="home-item admin-item home-item-3">
        <span className="home-item-content">
          <h3 className="home-item-content-heading admin-item-heading">O'qituvchilar</h3>
        </span>
        <span className="home-item-image home-item-image-admin home-item-image-3">
          <SchoolIcon sx={{fontSize:'25px'}} />
        </span>
      </NavLink>
      <NavLink to='adnGroups' className="home-item admin-item home-item-4">
        <span className="home-item-content">
          <h3 className="home-item-content-heading admin-item-heading">Guruhlar</h3>
        </span>
        <span className="home-item-image home-item-image-admin home-item-image-4">
          <GroupsIcon sx={{fontSize:'25px'}} />
        </span>
      </NavLink>
      <NavLink to='adnLibary' className="home-item admin-item home-item-1">
        <span className="home-item-content">
          <h3 className="home-item-content-heading admin-item-heading">kutubxona</h3>
        </span>
        <span className="home-item-image home-item-image-admin home-item-image-1">
          <MenuBookIcon sx={{fontSize:'25px'}} />
        </span>
      </NavLink>
      </div>
    </ul>
    </section>
  )
}

export default SideBar