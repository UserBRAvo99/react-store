import axios from "axios";
axios.defaults.baseURL = "https://dummyjson.com";

export const fetchProducts = async (config) => {
  try {
    const { data } = await axios.get("/products", {
      params: {
        limit: 8,
        ...config,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};
