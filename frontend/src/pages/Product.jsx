import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProduts from '../components/RelatedProduts';

const Product = () => {
  const { productId } = useParams();
  const { products,currency } = useContext(ShopContext);

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size,setSize] = useState('');

  useEffect(() => {
    if (!products) return;

    const foundProduct = products.find((item) => item._id === productId);
    if (foundProduct) {
      setProductData(foundProduct);
      setImage(foundProduct.image?.[0] || '');
      console.log(foundProduct); 
    } else {
      console.error(`Product with ID ${productId} not found.`);
    }
  }, [productId, products]);

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex gap-12 sm:gap-12 sm:flex-row'>
        {/* Product Images */}
        <div className='flex-1 flex-col-reverse gap-3 sm:flex-row flex'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {productData.image?.map((item, index) => (
              <img
                key={index}
                src={item}
                className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
                alt={`Product ${index}`}
                onClick={() => setImage(item)} // ✅ Allow clicking on thumbnails to change the main image
              />
            ))}
          </div>

          <div className='w-full sm:w-[80%'>
            <img className='w-full h-auto' src={image} alt="" />

          </div>
         
        </div>

        {/* Product Information */}

        <div className='flex-1 '>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex item-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className="w-8 10" />
            <img src={assets.star_icon}  alt="" className="w-8 10" />
            <img src={assets.star_icon}  alt="" className="w-8 10" />
            <img src={assets.star_icon}  alt="" className="w-8 10" />
            <img src={assets.dull_icon}  alt="" className="w-8 10" />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
             <p>Select Size</p>
                <div className='flex gap-2'>
                   {productData.sizes.map((item,index)=>(
                    <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item == size ? 'border-orange-500' : ' '}`} key={index}> {item}</button>
                   ))}
                </div>
          </div>
          <button className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 cursor-pointer'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5'/>
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
              <p>100% original product</p>
              <p>Cash On delivery is available on this Product</p>
              <p>Easy return and exhnage policy within 7 days</p>
          </div>
        </div>
      </div>
      {/* Description & preview Section */}
      <div className='mt-20 gap-2'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col  gap-4 border px-6 py-6 text-sm text-gray-500'>
            <p>It looks like you're trying to describe an eCommerce platform. Could you clarify what details you need? Are you looking for</p>
            <p>It looks like you're trying to describe an eCommerce platform. Could you clarify what details you need? Are you looking for:</p>
        </div>
      </div>
      {/* Display Related Products */}
         <RelatedProduts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : (
    <div className='opacity-0'></div>
  );
};

export default Product;
