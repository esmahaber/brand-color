import { useContext } from 'react';
import MainContext from '../context/MainContext';
import {getContrastYIQ} from './helpers';

function Brand({brand}) {

    const {selectedBrands, setSelectedBrands} = useContext(MainContext);

    const toggleSelected = () => {
        if(selectedBrands.includes(brand.slug)){
            setSelectedBrands(selectedBrands.filter(slug => slug !== brand.slug))
        }else {
            setSelectedBrands([...selectedBrands, brand.slug])
        }
    }

    return ( 
        <div className={`brand ${selectedBrands.includes(brand.slug) ? 'selected' : ''}`}>
            <h5 onClick={toggleSelected}>{brand.title}</h5>
            <div className="brand-colors">
                {brand.colors.map(color => (
                    <span style={{backgroundColor: '#' +color, color: getContrastYIQ(color)}}>{color}</span>
                ))}
            </div>
        </div>
     );
}

export default Brand;