import { Link, NavLink } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import TableViewIcon from '@mui/icons-material/TableView';
import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import VerifiedIcon from '@mui/icons-material/Verified';
import CloseIcon from '@mui/icons-material/Close';
import './Dashboard.css'

const Dashboard = ({toggleBar , setToggleBar}) => {
  return (
    <div className={toggleBar ? "index-dashboard show-dashboard" : "index-dashboard"}>
        <Link className='dashboard-logo'>
          <span>Politexnikum</span>
          <VerifiedIcon sx={{fontSize:'24px',marginBottom:'2.5px'}} className='dashboard-link-icon' />
        </Link>
        <ul className='dashboard-list'>
          <CloseIcon onClick={() => setToggleBar(!toggleBar)} className='dashboard-close-icon' sx={{position:'absolute',top:'-135px',right:'-10px',fontSize:'25px'}} />
          <li className="dashboard-item">
            <NavLink onClick={() => setToggleBar(!toggleBar)} className='dashboard-link' to=''>
              <HomeIcon sx={{fontSize:'24px',marginBottom:'2.5px'}} className='dashboard-link-icon' />
              <span>bosh sahifa</span>
            </NavLink>
          </li>
          <li className="dashboard-item">
            <NavLink onClick={() => setToggleBar(!toggleBar)} className='dashboard-link' to='schedule'>
             <TableViewIcon sx={{fontSize:'24px',marginBottom:'2.5px'}} className='dashboard-link-icon' />
              <span>dars jadvali</span>
            </NavLink>
          </li>
          <li className="dashboard-item">
            <NavLink onClick={() => setToggleBar(!toggleBar)} className='dashboard-link' to='teachers'>
              <SchoolIcon sx={{fontSize:'24px',marginBottom:'2.5px'}} className='dashboard-link-icon' />
              <span>o‘qituvchilar</span>
            </NavLink>
          </li>
          <li className="dashboard-item">
            <NavLink onClick={() => setToggleBar(!toggleBar)} className='dashboard-link' to='groups'>
              <GroupsIcon sx={{fontSize:'24px',marginBottom:'2.5px'}} className='dashboard-link-icon' />
              <span>guruhlar</span>
            </NavLink>
          </li>
          <li className="dashboard-item">
            <NavLink onClick={() => setToggleBar(!toggleBar)} className='dashboard-link' to='subject'>
              <MenuBookIcon sx={{fontSize:'24px',marginBottom:'2.5px'}} className='dashboard-link-icon' />
              <span>fanlar</span>
            </NavLink>
          </li>
        </ul>
    </div>
  )
}

export default Dashboard