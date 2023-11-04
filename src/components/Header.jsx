import SearchBar from './SearchBar';
import mainIcon from '../assets/LongIcon.svg';

// eslint-disable-next-line react/prop-types
const Header = ({ blurState, handleSearchChange }) => {
    return (
        <div className={`absolute top-0 w-full pl-16 z-10 ${blurState}`}>
            <div className="py-2  flex flex-col items-center">
                <img src={mainIcon} draggable="false" alt="" className="h-20" />
                <SearchBar handleSearchChange={handleSearchChange} />
            </div>

        </div>
    )
}
export default Header;