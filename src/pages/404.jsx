import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full h-screen bg-slate-800 text-white">
            <h1 className="text-9xl">404</h1>
            <h2 className=" text-4xl">Page Not Found</h2>
            <p className="mt-5 mb-3 text-lg font-medium">The page you are looking for doesn&apos;t exist.</p>
            <Link  to={'/active'} className="flex items-center hover:text-fuchsia-400 ease-in duration-100">
                <FontAwesomeIcon icon="fa-solid fa-arrow-left-long" size="xl" className="px-3" />
                <h1 className="text-xl">Back to Active Page</h1>
            </Link>
        </div>
    )

}

export default PageNotFound;