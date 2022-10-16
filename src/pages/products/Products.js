import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAsyncCreator } from "../../redux/slice/productsSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.products);
  console.log("productos ", list);
  useEffect(() => {
    dispatch(getProductsAsyncCreator());
  }, [dispatch]);

  return (
    <div>
      {list.map((product) => (
        <ul key={product._id}>
          <li>{product.name}</li>
          <li>{product.price}</li>
          <li>{product.category}</li>
        </ul>
      ))}
    </div>
  );
};

export default Products;
