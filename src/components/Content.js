import Header from "./Header/Header";
import { useState } from "react/cjs/react.development";
import Brand from "./Brand";
import MainContext from "../context/MainContext";
import { useContext } from "react";

function Content() {    
    const {brands} = useContext(MainContext);
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
    </>

     );
}

export default Content;