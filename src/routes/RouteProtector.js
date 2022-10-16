import { useLocation, Navigate } from "react-router-dom";

const RouteProtector = ({ children }) => {
  const location = useLocation();
  const apiToken = localStorage.getItem("tokenGonza");
  const existToken = () => {
    return apiToken && apiToken;
  };

  const checkPath = () => {
    return ["/login", "/register", "/recover", "/terms"].includes(
      location.pathname
    );
  };

  return (
    <>
      {existToken() !== null ? (
        <> {children} </>
      ) : !checkPath() ? (
        <Navigate to="/login" />
      ) : (
        <></>
      )}
    </>
  );
};
export default RouteProtector;
