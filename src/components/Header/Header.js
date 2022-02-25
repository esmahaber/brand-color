import Downloads from "./Downloads";
import Search from "./Search";

function Header() {
    return ( 
    <header className="header">
        <Search/>
        <div className="pull-right">
            <Downloads/>
        </div>
    </header> );
}

export default Header;