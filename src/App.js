import { useRoutes } from "react-router-dom";
import { routes } from "./routes/Routes";

function App() {
  const routeConfig = useRoutes(routes);
  return routeConfig;
}

export default App;
