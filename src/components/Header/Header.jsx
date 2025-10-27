import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import './Header.css'

const Header = ({setToggleBar , toggleBar}) => {
  return (
    <header className='index-header'>
      <div className="header-container container">
        <Link className='header-logo' to=''>politexnikum</Link>
        <MenuIcon onClick={() => setToggleBar(!toggleBar)} className='header-menu-icon' />
        <div className="header-info-wrapper">
          <img loading='lazy' className='header-profile-image' src="https://img.freepik.com/premium-vector/anonymous-user-flat-icon-vector-illustration-with-long-shadow_520826-1932.jpg" alt="administrator-profile image" width={42} height={42} />
        </div>
      </div>
    </header>
  )
}

export default Header