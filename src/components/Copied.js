import { useContext } from "react";
import MainContext from "../context/MainContext";

function Copied() {
    const {copiedBrand} = useContext(MainContext);
    return ( 
    <div className="copied">
         Copied #{copiedBrand} to Clipboard
    </div> );
}

export default Copied;