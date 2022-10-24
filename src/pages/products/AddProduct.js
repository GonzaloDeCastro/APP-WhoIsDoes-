import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ButtonForm, InputForm } from "../../css/FormStyleComponents";
import "../../css/products.css";
import { addAsyncCreator } from "../../redux/slice/productsSlice";
export const AddProduct = ({ show }) => {
  const [nameProduct, setNameProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [categoryProduct, setCategoryProduct] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      name: nameProduct,
      category: categoryProduct,
      price: priceProduct,
    };
    dispatch(addAsyncCreator(product));
  };

  return (
    <form className="FormProduct" onSubmit={handleSubmit}>
      <label className="LabelForm">Name</label>
      <InputForm
        variant="outlined"
        type="text"
        autoComplete="off"
        onChange={(e) => setNameProduct(e.target.value)}
      />
      <label className="LabelForm">Price</label>
      <InputForm
        variant="outlined"
        type="number"
        autoComplete="off"
        onChange={(e) => setPriceProduct(e.target.value)}
      />
      <label className="LabelForm">Category</label>
      <InputForm
        variant="outlined"
        type="text"
        autoComplete="off"
        onChange={(e) => setCategoryProduct(e.target.value)}
      />
      <ButtonForm type="submit" onClick={() => !show}>
        Add
      </ButtonForm>
    </form>
  );
};
