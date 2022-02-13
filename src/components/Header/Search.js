import {GrFormSearch} from "react-icons/gr"
import { useContext } from "react";
import MainContext from "../../context/MainContext";
function Search() {
    const {setSearch} = useContext(MainContext);

    return ( 
        <div className="search">
            <GrFormSearch/>
            <input type="text" className="search" onChange={(e) => setSearch(e.target.value)} placeholder="Search Brand"/>
        </div>
     );
}

export default Search;