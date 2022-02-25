import {GrDownload, GrClose, GrLink} from 'react-icons/gr';
import {BsLink} from 'react-icons/bs';
import { useContext , useState, useEffect} from "react";
import MainContext from '../../context/MainContext';

export default function Downloads() {
    const {selectedBrands, brands, setSelectedBrands} = useContext(MainContext);
    const [downloadUrl, setDownloadUrl] = useState('');
    const [changeDownloadType, setChangeDownloadType] = useState('');

    useEffect(() => {
      if(selectedBrands.length > 0){
          let output = '';

        switch (changeDownloadType) {
            case "css":
                selectedBrands.map(slug => {
                    let brand = brands.find(brand => brand.slug === slug)
                    brand.colors.map((color, key) =>{
                        output += `--${slug}-${key}: #${color}\n`
                    })
                })
                break;
            case "scss":
                selectedBrands.map(slug => {
                    let brand = brands.find(brand => brand.slug === slug)
                    brand.colors.map((color, key) =>{
                        output += `\$${slug}-${key}: #${color}\n`
                    })
                })
                break;
            case "less":
                selectedBrands.map(slug => {
                    let brand = brands.find(brand => brand.slug === slug)
                    brand.colors.map((color, key) =>{
                        output += `@${slug}-${key}: #${color}\n`
                    })
                })
                break;
        }

          

          const blob = new Blob([output]);
          const url = URL.createObjectURL(blob);
          setDownloadUrl(url);
          
            return () => {
                URL.revokeObjectURL(url);
                setDownloadUrl('');
            }
      }
      
    }, [selectedBrands, changeDownloadType])
    
    const getLink = ()=>{
        prompt("Here's the URL to share",`http://localhost:3000/collections/${selectedBrands.join(',')}`)
    }

    return (
    <div className="downloads">
        <div className={"selected-event " + (selectedBrands.length > 0 ? 'active' : '')}>
            <a download={`brands.${changeDownloadType}`} href={downloadUrl}>
                <GrDownload/>
            </a>
            <select onChange={(e)=> setChangeDownloadType(e.target.value)}>
                <option></option>
                <option value="css">Css</option>
                <option value="scss">Scss</option>
                <option value="less">Less</option>
            </select>
            <GrLink onClick={getLink}/>
            <GrClose onClick={() => setSelectedBrands("")}/>
            {selectedBrands.length} Brand Collected
        </div>
        <GrDownload/> All Brands
    </div>
    )
}