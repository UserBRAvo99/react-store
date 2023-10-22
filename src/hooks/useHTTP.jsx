import { useEffect, useState } from "react";
import { fetchProducts } from "../service/api";
import { toast } from "react-toastify";

export const useHTTP = () => {
  const [dataProducts, setDataProducts] = useState([]);
  const [limit, setLimit] = useState(4);
  const [skip, setSkip] = useState(0);

  const changeLimit = (e) => {
    setLimit(e.target.value);
  };

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
  return { dataProducts, limit, skip, changeLimit, changePage };
};
