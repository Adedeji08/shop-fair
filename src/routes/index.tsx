import { useRoutes } from "react-router-dom";
import Landing from "./landing";
// ================|| ROUTING RENDER ||================ //

export default function ThemeRoutes() {
  return useRoutes([
     Landing,
    // ...MainRoutes,
    // { path: "/signup", element: <SignUp /> },
   
  ]);
}
