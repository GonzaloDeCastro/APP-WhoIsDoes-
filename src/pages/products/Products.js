import React, { useState } from "react";
import ProductsList from "./ProductsList";
import "../../css/products.css";
import { ButtonForm } from "../../css/FormStyleComponents";
import { AddProduct } from "./AddProduct";

const Products = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="Container">
      <ButtonForm onClick={() => setShow(!show)}> New Product</ButtonForm>
      {show && (
        <>
          <AddProduct showForm={show} />
        </>
      )}

      <ProductsList />
    </div>
  );
};

export default Products;
