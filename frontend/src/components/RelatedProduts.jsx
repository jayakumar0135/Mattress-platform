import React, { useContext, useState , useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'

const RelatedProduts = ({category,subCategory}) => {

    const {products} = useContext(ShopContext);
    const [related,setRelated] = useState([]);

    useEffect(()=>{
        if(products.length > 0){
            let productsCopy = products.slice();

            productsCopy = products.filter((item)=> category === item.category);
            productsCopy = productsCopy.filter((item)=>subCategory === item.subCategory);

            setRelated(productsCopy.slice(0,5));
            
        }
    },[products])
  return (
    <div>
       
    </div>
  )
}

export default RelatedProduts
