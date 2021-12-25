import Header from "./Header/Header";
import Brands from "../brands.json";
import { useState } from "react/cjs/react.development";
import Brand from "./Brand";

function Content() {

    const brandsArray = [];

    Object.keys(Brands).map(key => {
        brandsArray.push(Brands[key])
    })

    const [brands, setBrands] = useState(brandsArray);

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