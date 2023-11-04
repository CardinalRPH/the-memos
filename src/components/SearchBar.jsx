import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// eslint-disable-next-line react/prop-types
const SearchBar = ({handleSearchChange}) => {
    return (
        <>
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-white sr-only dark:text-white">Search</label>
            <div className="relative w-1/2">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className="text-white" />
                </div>
                <input type="search" id="default-search" onChange={handleSearchChange} className="block w-full p-4 pl-10 text-lg border-b-2 border-white text-white outline-none bg-transparent placeholder:text-white" placeholder="Search Memo Title" />
            </div>
        </>
    )
}

export default SearchBar