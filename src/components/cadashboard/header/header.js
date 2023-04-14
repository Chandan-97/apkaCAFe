import './header.css'
import LogoutIcon from '@mui/icons-material/Logout';
import ClientList from '../clientlist/clientlist';
import ServicesList from '../serviceslist/serviceslist';
import PersonalDetails from '../personaldetails/personaldetails';

function Header(props) {
    function openTab(tabId, tabContentId) {
        if (tabId === "client_tab") {
            document.getElementById("services_tab").classList.remove('Header-menu-class')
            document.getElementById("services_tab_content").style.display = 'none'

            document.getElementById("personal_details_tab").classList.remove('Header-menu-class')
            document.getElementById("personal_details_tab_content").style.display = 'none'

            var tab = document.getElementById(tabId)
            tab.classList.add('Header-menu-class')

            var tabContent = document.getElementById(tabContentId)
            tabContent.style.display = 'block'
        }

        if (tabId === "services_tab") {
            document.getElementById("client_tab").classList.remove('Header-menu-class')
            document.getElementById("client_tab_content").style.display = 'none'

            document.getElementById("personal_details_tab").classList.remove('Header-menu-class')
            document.getElementById("personal_details_tab_content").style.display = 'none'

            var tab = document.getElementById(tabId)
            tab.classList.add('Header-menu-class')

            var tabContent = document.getElementById(tabContentId)
            tabContent.style.display = 'block'
        }

        if (tabId === "personal_details_tab") {
            document.getElementById("client_tab").classList.remove('Header-menu-class')
            document.getElementById("client_tab_content").style.display = 'none'

            document.getElementById("services_tab").classList.remove('Header-menu-class')
            document.getElementById("services_tab_content").style.display = 'none'

            var tab = document.getElementById(tabId)
            tab.classList.add('Header-menu-class')

            var tabContent = document.getElementById(tabContentId)
            tabContent.style.display = 'block'
        }
    }

    return (
        <div className='Header'>
            <div>
                <span className='Header-logo'>aapkCA</span>
                <span className='Header-button right dropdown login-signup'>
                    <button className="dropdown">Logout / Exit</button>
                    <div className="dropdown-content">
                        <a href="#"><LogoutIcon fontSize='small' /> Logout</a>
                    </div>
                </span>
            </div>
            <div className='Header-menu'>
                <span id='client_tab' className='Header-menu-item' onClick={() => openTab('client_tab', 'client_tab_content')}>Clients</span>
                <span id='services_tab' className='Header-menu-item' onClick={() => openTab('services_tab', 'services_tab_content')}>Services</span>
                <span id='personal_details_tab' className='Header-menu-item' onClick={() => openTab('personal_details_tab', 'personal_details_tab_content')}>Personal Details</span>
            </div>

            <div id='client_tab_content' className='tabContent'>
                <ClientList />
            </div>
            <div id='services_tab_content' className='tabContent'>
                <ServicesList />
            </div>
            <div id='personal_details_tab_content' className='tabContent'>
                <PersonalDetails />
            </div>
        </div>
    )
}

export default Header;