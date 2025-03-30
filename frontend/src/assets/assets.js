//All icon images
import logo from './logo.png';
import search from './search.png';
import profile from './profile.png';
import cart_icon from './cart_icon.png';
import menu_icon from './menu_icon.png';
import dropdown_icon from './dropdown_icon.png';
import exchange_icon from './exchange_icon.png';
import quality_icon from './quality_icon.png';
import support_img from './support_img.png';


// Images for the All dresses
import hero_img from './hero_img.png';
import p_img1 from './p_img1.png';
import p_img3 from './p_img3.png';
import p_img4 from './p_img4.png';
import p_img5 from './p_img5.png';
import p_img6 from './p_img6.png';
import p_img8 from './p_img8.png';

export const assets = {
  logo,
  search,
  profile,
  cart_icon,
  menu_icon,
  dropdown_icon,
  hero_img,
  exchange_icon,
  quality_icon,
  support_img
};

export const products = [
  {
    _id: "aaaa",
    name: "Women Round Neck",
    description: "A Good Dress",
    price: 100,
    image: [p_img1],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    date: 17274,
    bestseller: true
  },
  {
    _id: "cccc",
    name: "Women's Floral Dress",
    description: "A beautiful floral dress for any occasion.",
    price: 150,
    image: [p_img3],
    category: "Women",
    subCategory: "Dresses",
    sizes: ["S", "M", "L", "XL"],
    date: 17276,
    bestseller: true
  },
  {
    _id: "dddd",
    name: "Men's Sports Shoes",
    description: "Lightweight and comfortable sports shoes.",
    price: 200,
    image: [p_img4, p_img8],
    category: "Men",
    subCategory: "Footwear",
    sizes: [7, 8, 9, 10],
    date: 17277,
    bestseller: true
  },
  {
    _id: "eeee",
    name: "Women's Handbag",
    description: "A stylish and spacious handbag.",
    price: 180,
    image: [p_img5],
    category: "Women",
    subCategory: "Accessories",
    sizes: [],
    date: 17278,
    bestseller: false
  },
  {
    _id: "ffff",
    name: "Unisex Smart Watch",
    description: "A feature-rich smartwatch with fitness tracking.",
    price: 250,
    image: [p_img6],
    category: "Accessories",
    subCategory: "Wearables",
    sizes: [],
    date: 17279,
    bestseller: true
  }
];