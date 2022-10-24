import React, { useEffect } from "react";
import "../../css/products.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { ButtonIcon } from "../../css/FormStyleComponents";
import { useDispatch } from "react-redux";
import { deleteAsyncCreator } from "../../redux/slice/productsSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="ContainerCard">
      <div className="ContainerCardField">{product.name}</div>
      <div className="ContainerCardField">{product.price}</div>
      <div className="ContainerCardField">{product.category}</div>
      <div className="ContainerCardField">
        <ButtonIcon onClick={() => dispatch(deleteAsyncCreator(product._id))}>
          <DeleteIcon />
        </ButtonIcon>
      </div>
    </div>
  );
};

export default ProductCard;
