import axios from "axios";
axios.defaults.baseURL = "https://dummyjson.com";

export const fetchProducts = async () => {
  try {
    const { data } = await axios.get("/products");
    return data;
  } catch (error) {
    return error;
  }
};
