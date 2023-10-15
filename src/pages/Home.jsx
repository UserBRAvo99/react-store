import { ProductList } from "../components/ProductList/ProductList";
import { Header } from "../components/Header/Header";
import { Pagination } from "../components/Pagination/Pagination";
import { fetchProducts } from "../service/api";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const Home = () => {
  const [dataProducts, setDataProducts] = useState([]);
  const [limit, setLimit] = useState(4);
  const [skip, setSkip] = useState(0);

  const changePage = (option) => {
    if (option === "next") {
      setSkip(skip + limit);
    }
    if (option === "prev" && skip > 0) {
      setSkip(skip - limit);
    }
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchProducts({ limit, skip });
        setDataProducts(data.products);
      } catch (error) {
        toast.error("error");
      }
    };
    getData();
  }, [limit, skip]);
  return (
    <>
      <Header />
      <ProductList data={dataProducts} />
      <Pagination changePage={changePage} />
    </>
  );
};
