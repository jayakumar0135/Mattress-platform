import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem'; 
import Title from './Title';

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (!products || products.length === 0 || !category || !subCategory) return;

    console.log("Category:", category);
    console.log("SubCategory:", subCategory);
    console.log("Filtering related products...");

    const filteredProducts = products
      .filter((item) => item.category === category && item.subCategory === subCategory)
      .slice(0, 5);

    setRelated(filteredProducts);
  }, [products, category, subCategory]);

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1="RELATED" text2="PRODUCTS" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 gap-y-6">
        {related.length > 0 ? (
          related.map((item) => (
            <ProductItem key={item._id} id={item._id} name={item.name} price={item.price} image={item.image} />
          ))
        ) : (
          <p className="col-span-5 text-center text-gray-500">No related products found.</p>
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;
