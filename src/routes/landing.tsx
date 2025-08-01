
import LandingPage from "../pages/landing";
import AuthGuard from "../utils/route-guard/auth-guard";


// ==============|| MAIN ROUTING ||============ //
async function checkIfUserIsLoggedIn() {
  const token = localStorage.getItem('token');
  return token !== null;
}

const MainRoutes = {
  path: "/",
  element: <AuthGuard><LandingPage /></AuthGuard>,
  loader: async () => {
    const isLoggedIn = await checkIfUserIsLoggedIn();
    return isLoggedIn ? { pathname: "/dashboard" } : null;
  },
};



export default MainRoutes;