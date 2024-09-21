import { useRoutes } from "react-router-dom";
import routers from "./routers/router";

const App = () => {
  const router = useRoutes(routers);
  return <div>{router}</div>;
};

export default App;
