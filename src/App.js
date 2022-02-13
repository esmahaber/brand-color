import './App.css';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import MainContext from './context/MainContext';
import Brands from "./brands.json";
import { useState } from 'react/cjs/react.development';
import { useEffect } from 'react';

function App() {

  let brandsArray = [];

  Object.keys(Brands).map(key => {
      brandsArray.push(Brands[key])
  })

  const [brands, setBrands] = useState(brandsArray);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [copiedBrand, setCopiedBrand] = useState();
  const [search, setSearch] = useState("");

  const data = {
    brands,
    selectedBrands,
    setSelectedBrands,
    copiedBrand,
    setCopiedBrand,
    setSearch,
  }

  useEffect(()=>{
    setTimeout(() => {
      setCopiedBrand("");
    }, 5000);
  },[copiedBrand])

  useEffect(() =>{
    setBrands(brandsArray.filter(brand => brand.title.toLowerCase().includes(search.toLowerCase())));
  }, [search])

  return (
    <>
    <MainContext.Provider value={data}>
      <Sidebar/>
      <Content/>
    </MainContext.Provider>
    </>
  );
}

export default App;
