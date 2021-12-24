import {GrFormSearch} from "react-icons/gr"
function Search() {
    return ( 
        <div className="search">
            <GrFormSearch/>
            <input className="search" placeholder="Search Brand"/>
        </div>
     );
}

export default Search;