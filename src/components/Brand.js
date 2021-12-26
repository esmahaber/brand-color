import { useContext } from 'react';
import MainContext from '../context/MainContext';
import {getContrastYIQ} from './helpers';
import Clipboard from 'react-clipboard.js';

function Brand({brand}) {

    const {selectedBrands, setSelectedBrands, setCopiedBrand} = useContext(MainContext);

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
                    <Clipboard component="span" style={{backgroundColor: '#' +color, color: getContrastYIQ(color)}} data-clipboard-text={color} onSuccess={() => setCopiedBrand(color)}>
                        {color}
                    </Clipboard>
                ))}
            </div>
        </div>
     );
}

export default Brand;