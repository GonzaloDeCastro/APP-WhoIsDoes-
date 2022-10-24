import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  isLoading: false,
  error: "",
};

export const product = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProducts: (state, action) => {
      return {
        ...state,
        list: action.payload,
      };
    },
    removeProduct: (state, action) => {
      return {
        ...state,
        list: state.list.filter((product) => product._id !== action.payload),
      };
    },
    creatorAddProduct: (state, action) => {
      return {
        ...state,
        list: [action.payload, ...state.list],
      };
    },
  },
});
export const { getProducts, removeProduct, creatorAddProduct } =
  product.actions;

export const getProductsAsyncCreator = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:4000/api/products`);

      if (response.status === 200) {
        const action = getProducts(response.data);
        dispatch(action);
      }
    } catch (error) {}
  };
};

export const deleteAsyncCreator = (productId) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/products/${productId}`,
        {
          headers: {
            "x-access-token": JSON.parse(localStorage.getItem("tokenGonza")),
          },
        }
      );

      if (response.status === 202 || response.status === 200) {
        const action = removeProduct(productId);
        dispatch(action);
      }
    } catch (error) {}
  };
};

export const addAsyncCreator = (product) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `http://localhost:4000/api/products`,
        product,
        {
          headers: {
            "x-access-token": JSON.parse(localStorage.getItem("tokenGonza")),
          },
        }
      );
      console.log(response);
      if (response.status === 201) {
        const action = creatorAddProduct(response.data);

        dispatch(action);
      }
    } catch (error) {}
  };
};

export default product.reducer;
