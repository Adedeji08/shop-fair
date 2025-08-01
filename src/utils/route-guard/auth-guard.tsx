import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

interface AuthGuardProps {
  children: React.ReactNode;
}

interface DecodedToken {
  exp: number;
  [key: string]: any;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isReady, setIsReady] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const currentPath = location.pathname;

    // No token case
    if (!token) {
      if (currentPath !== "/") {
        navigate("/", { replace: true });
      }
      setShouldRender(currentPath === "/");
      setIsReady(true);
      return;
    }

    // Token exists case
    try {
      const decoded: DecodedToken = jwtDecode(token);
      const isExpired = decoded.exp * 1000 < Date.now();

      if (isExpired) {
        localStorage.clear();
        navigate("/", { replace: true });
        setShouldRender(currentPath === "/");
      } else if (currentPath === "/") {
        navigate("/dashboard", { replace: true });
        setShouldRender(false);
      } else {
        setShouldRender(true);
      }
    } catch (error) {
      localStorage.clear();
      navigate("/", { replace: true });
      setShouldRender(currentPath === "/");
    } finally {
      setIsReady(true);
    }
  }, [navigate, location]);

  if (!isReady) return null;
  return shouldRender ? <>{children}</> : null;
};

export default AuthGuard;