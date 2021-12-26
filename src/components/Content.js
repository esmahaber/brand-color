import Header from "./Header/Header";
import { useState } from "react/cjs/react.development";
import Brand from "./Brand";
import MainContext from "../context/MainContext";
import { useContext } from "react";
import Copied from "./Copied";

function Content() {    
    const {brands, copiedBrand} = useContext(MainContext);
    return ( 
    <>
        <main className="content">
            <Header/>
            <section className="brands">
                {brands.map(item => (
                     <Brand brand={item}/>
                )
                )}
            </section>
        </main>
        {copiedBrand && <Copied/>}
    </>

     );
}

export default Content;