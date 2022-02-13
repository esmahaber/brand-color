import Header from "./Header/Header";
import Brand from "./Brand";
import MainContext from "../context/MainContext";
import { useContext } from "react";
import Copied from "./Copied";
import LazyLoad from 'react-lazyload';

function Content() {    
    const {brands, copiedBrand} = useContext(MainContext);
    return ( 
    <>
        <main className="content">
            <Header/>
            <section className="brands">
                {brands.map((item, index) => (
                <LazyLoad key={item.slug} placeholder="Yükleniyor..." once={true} overflow={true}>
                     <Brand key={item.slugss} brand={item}/>
                 </LazyLoad>
                )
                )}
            
            </section>
        </main>
        {copiedBrand && <Copied/>}
    </>

     );
}

export default Content;