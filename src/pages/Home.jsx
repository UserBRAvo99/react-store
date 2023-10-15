import { ProductList } from "../components/ProductList/ProductList";
import { Header } from "../components/Header/Header";
import { Pagination } from "../components/Pagination/Pagination";
import { fetchProducts } from "../service/api";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const Home = () => {
  const [dataProducts, setDataProducts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchProducts();
        setDataProducts(data.products);
      } catch (error) {
        toast.error("error");
      }
    };
    getData();
  }, []);
  return (
    <>
      <Header />
      <ProductList data={dataProducts} />
      <Pagination />
    </>
  );
};
