import { NavLink, Outlet } from 'react-router-dom'
import BookIcon from '@mui/icons-material/Book';
import './Courses.css'

const Courses = () => {
  return ( <div className="site-courses">
    <ul>
      <div className='flex items-center justify-center gap-[40px]'>
        <NavLink to='courses-1' className="home-item schedule-links home-item-1 !w-full flex-wrap gap-[10px]">
          <span>
            <h4 className="home-item-content-value font-bold uppercase">1 - kurs</h4>
          </span>
          <span id='item-link-schedule' className="home-item-image home-item-image-1">
            <BookIcon sx={{fontSize:'28px'}} />
          </span>
        </NavLink>
        <NavLink to='courses-2' className="home-item schedule-links home-item-1 !w-full flex-wrap gap-[10px]">
          <span>
            <h4 className="home-item-content-value font-bold uppercase">2 - kurs</h4>
          </span>
          <span id='item-link-schedule' className="home-item-image home-item-image-1">
            <BookIcon sx={{fontSize:'28px'}} />
          </span>
        </NavLink>
      </div>
    </ul>
    <Outlet />
  </div>
  )
}

export default Courses