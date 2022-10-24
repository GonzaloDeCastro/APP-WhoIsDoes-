import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAsyncCreator } from "../../redux/slice/productsSlice";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ProductCard from "./ProductCard";

const ProductsList = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.products);
  console.log("productos ", list);
  useEffect(() => {
    dispatch(getProductsAsyncCreator());
  }, [dispatch]);
  return (
    <div className="ContainerListCard">
      <div className="ContainerCardTitle">
        <div className="ContainerCardFieldTitle">Name</div>
        <div className="ContainerCardFieldTitle">Price</div>
        <div className="ContainerCardFieldTitle">Category</div>
        <div className="ContainerCardFieldTitle">
          <DeleteForeverIcon />
        </div>
      </div>
      {list.map((product) => (
        <div key={product._id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
