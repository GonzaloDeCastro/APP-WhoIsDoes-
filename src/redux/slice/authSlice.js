import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_API_URL = process.env.REACT_APP_API_URL;
const initialState = {
  userLogged: {},
  /*   logged: true, */
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    LOGIN: (state, action) => {
      return {
        ...state,
        userLogged: action.payload,
        /* logged: true, */
      };
    },

    REGISTER: (state, action) => {
      return {
        ...state,
        register: action.payload,
      };
    },
  },
});

export const { LOGIN, REGISTER } = authSlice.actions;

export const userLogin = (form, navigate) => {
  return async (dispatch) => {
    try {
      const body = form;
      const res = await axios.post(
        `http://localhost:4000/api/auth/signin`,
        body
      );
      localStorage.setItem("user", JSON.stringify(res.data));
      localStorage.setItem("tokenGonza", JSON.stringify(res.data.token));

      navigate("/menu");
      /*     const action = LOGIN(res.data);
        dispatch(action); */
    } catch (e) {
      const action = LOGIN(e.response.data.message);
      dispatch(action);
      localStorage.clear();
    }
  };
};

export const postRegister = (form, navigate) => {
  return async (dispatch) => {
    try {
      const body = form;
      const res = await axios.post(`${BASE_API_URL}/user/pend/add`, body, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (res.status === 201 || res.status === 200) {
        navigate("/sentregister");
        return res;
      }
    } catch (e) {
      const action = REGISTER(e.response.data.message);
      dispatch(action);
    }
  };
};
export default authSlice.reducer;
