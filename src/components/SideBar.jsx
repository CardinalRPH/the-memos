import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useLocation } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const SideBar = ({ blurState }) => {
    const location = useLocation();
    const pathParts = location.pathname.split('/');
    const currentPath = pathParts[pathParts.length - 1];
  
    return (
        <div className={`bg-fuchsia-600 fixed flex flex-col justify-center top-0 z-20 min-h-screen w-16 ${blurState}`}>
            <Link to='/active' className={`tooltip text-white hover:text-fuchsia-600 hover:bg-white duration-100 ease-in ${currentPath==='active'? 'bg-slate-800': 'bg-transparent'}`}>
                <FontAwesomeIcon icon="fa-solid fa-note-sticky" size="2xl" className="my-5" />
                <div className="tooltiptext">
                    Active
                </div>
            </Link>
            <Link to='/archive' className={`tooltip text-white hover:text-fuchsia-600 hover:bg-white duration-100 ease-in ${currentPath==='archive'? 'bg-slate-800': 'bg-transparent'}`}>
                <FontAwesomeIcon icon="fa-solid fa-box-archive" size="2xl" className="my-5" />
                <div className="tooltiptext">
                    Archive
                </div>
            </Link>
        </div>
    )
}

export default SideBar