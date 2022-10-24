import { Navigate } from "react-router-dom";

const RouteProtector = ({ children }) => {
  const apiToken = localStorage.getItem("tokenGonza");
  console.log(JSON.parse(apiToken));
  const existToken = () => {
    return apiToken && apiToken;
  };

  return (
    <>{existToken() !== null ? <> {children} </> : <Navigate to="/login" />}</>
  );
};
export default RouteProtector;
