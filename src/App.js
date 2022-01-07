import { useState, useEffect } from "react";

export default function useProductList() {
  const [productList, setProductObjsList] = useState([]);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  let randomProducts = [];

  const fetchData = () =>
    new Promise(() => {
      setProductObjsList(arr);
      return arr;
    });

  const randomProduct = (productObjectList) => {
    console.log("randomProduct()", productObjectList);
  };

  useEffect(() => {
    fetchData().then((result) => randomProduct(result));
  }, []);

  return randomProducts;
}
