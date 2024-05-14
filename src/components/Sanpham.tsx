import React from 'react';

interface Product {
  image: string;
  name: string;
  price: string;
  id: number;
  sale: string;
  size: string[];
  color: string[];
  quantity: string;
}

const products: Product[] = [
  {
    image: "../src/assets/imgs/ao1.jpg",
    name: "Set caro",
    price: "199000",
    id: 1,
    sale: "5%",
    size: ["S", "L", "M", "XL", "2XL", "Khác"],
    color: ["Đen", "Trắng", "Xanh"],
    quantity: "1000",
  },
  {
    image: "../src/assets/imgs/bo1.jpg",
    name: "Bộ quần áo thun nữ ",
    price: "175000",
    id: 2,
    sale: "10%",
    size: ["S", "L", "M", "XL", "2XL", "Khác"],
    color: ["Đen", "Trắng", "Xanh"],
    quantity: "1000",
  },
  {
    image: "../src/assets/imgs/b1.jpg",
    name: "set mùa hè nữ",
    price: "500000",
    id: 3,
    sale: "15%",
    size: ["S", "L", "M", "XL", "2XL", "Khác"],
    color: ["Đen", "Trắng", "Xanh"],
    quantity: "1000",
  },
  {
    image: "../src/assets/imgs/c1.jpg",
    name: "bộ quần áo The Bad God Flexy",
    price: "250000",
    id: 4,
    sale: "18%",
    size: ["S", "L", "M", "XL", "2XL", "Khác"],
    color: ["Đen", "Trắng", "Xanh"],
    quantity: "1000",
  },
  {
    image: "../src/assets/imgs/cb1.jpg",
    name: "bộ quần áo thể thao",
    price: "100000",
    id: 5,
    sale: "20%",
    size: ["S", "L", "M", "XL", "2XL", "Khác"],
    color: ["Đen", "Trắng", "Xanh"],
    quantity: "1000",
  },
  {
    image: "../src/assets/imgs/quan.jpg",
    name: "Quần jean ống rộng",
    price: "120000",
    id: 6,
    sale: "45%",
    size: ["S", "L", "M", "XL", "2XL", "Khác"],
    color: ["Đen", "Trắng", "Xanh"],
    quantity: "1000",
  },
  {
    image: "../src/assets/imgs/set1.jpg",
    name: "Bộ quần áo nam mùa hè",
    price: "200000",
    id: 7,
    sale: "50%",
    size: ["S", "L", "M", "XL", "2XL", "Khác"],
    color: ["Đen", "Trắng", "Xanh"],
    quantity: "1000",
  },
  {
    image: "../src/assets/imgs/comboo1.jpg",
    name: "bộ quần áo thun",
    price: "150000",
    id: 8,
    sale: "90%",
    size: ["S", "L", "M", "XL", "2XL", "Khác"],
    color: ["Đen", "Trắng", "Xanh"],
    quantity: "1000",
  },
];

localStorage.setItem("products", JSON.stringify(products));

const MyComponent: React.FC = () => {

  return <div>Your component JSX here</div>;
};

export default MyComponent;
