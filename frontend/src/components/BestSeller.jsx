import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem'; // ✅ Import ProductItem

const BestSeller = () => {
    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        if (products?.length > 0) { // ✅ Check if products exist before filtering
            const bestProduct = products.filter((item) => item.bestseller);
            setBestSeller(bestProduct.slice(0, 5));
        }
    }, [products]); // ✅ Add products as a dependency

    return (
        <div className="my-10">
            <div className="text-center text-3xl py-8">
                <Title text1={'BEST '} text2={'SELLERS'} />
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
                    Discover the perfect blend of luxury and support with our premium mattresses. Crafted for deep, restful sleep, so you wake up refreshed every morning.
                </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 gap-y-6">
                {bestSeller.map((item, index) => (
                    <ProductItem 
                        key={index} 
                        id={item._id} 
                        name={item.name} 
                        image={item.image} 
                        price={item.price} 
                    />
                ))}
            </div>
        </div>
    );
};

export default BestSeller;
