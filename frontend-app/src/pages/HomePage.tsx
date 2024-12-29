import axios from "axios";
import { useState, useEffect } from "react";
import Product from "../interfaces/IProduct";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const [productList, setProductList] = useState<Product[]>([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const response = await axios.get("http://localhost:5000/product/");
      setProductList(response.data);
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {productList.length !== 0 &&
        productList.map((product) => <ProductCard product={product} />)}
    </>
  );
};

export default HomePage;
