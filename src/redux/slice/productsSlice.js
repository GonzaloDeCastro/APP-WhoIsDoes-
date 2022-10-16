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
  },
});
export const { getProducts } = product.actions;

export const getProductsAsyncCreator = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:4000/api/products`);

      if (response.status === 200) {
        const action = getProducts(response.data);
        dispatch(action);
        console.log(action);
      }
    } catch (error) {}
  };
};

export default product.reducer;
