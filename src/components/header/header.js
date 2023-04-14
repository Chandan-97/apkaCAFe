import './header.css'
import LoginIcon from '@mui/icons-material/Login';

function Header(props) {
    return (
        <div className='Header'>
            <div>
                <span className='Header-logo'>aapkCA</span>
                <span className='Header-button right dropdown login-signup'>
                    <button className="dropdown">Login / Signup</button>
                    <div className="dropdown-content">
                        <a href="#"><LoginIcon fontSize='small' /> CA</a>
                        <a href="#"><LoginIcon fontSize='small' /> Customer</a>
                    </div>
                </span>
            </div>
            <div className='Header-menu'>
                <span className='Header-menu-item'>Home</span>
                <span className='Header-menu-item'>About Us</span>
                <span className='Header-menu-item'>CA Blogs</span>
                <span className='Header-menu-item'>Trace CA Member</span>
                <span className='Header-menu-item'>Need Help?</span>
            </div>
            <div className='Header-menu'>
                <span className='Header-menu-item'>Search CA by location</span>
                <span className='Header-menu-item'>Search CA by business need</span>
                <span className='Header-menu-item'>Search CA by business stage</span>
                <span className='Header-menu-item'>Search CA by business domain</span>
            </div>
        </div>
    )
}

export default Header;