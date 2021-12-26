import './App.css';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import MainContext from './context/MainContext';
import Brands from "./brands.json";
import { useState } from 'react/cjs/react.development';

function App() {

  const brandsArray = [];

  Object.keys(Brands).map(key => {
      brandsArray.push(Brands[key])
  })

  const [brands, setBrands] = useState(brandsArray);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const data = {
    brands,
    selectedBrands,setSelectedBrands
  }

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
