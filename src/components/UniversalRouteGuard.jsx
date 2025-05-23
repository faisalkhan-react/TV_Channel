import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

/**
 * Universal route guard for both admin and user roles.
 *
 * @param {"private" | "public"} mode - Route type
 * @param {"admin" | "user"} role - Required role
 * @param {string} redirectTo - Redirect path if condition fails
 */
const UniversalRouteGuard = ({
  children,
  role = "user",
  mode = "private",
  redirectTo = "/",
}) => {
  const location = useLocation();
  const [timedOut, setTimedOut] = useState(false);

  const adminState = useSelector((state) => state.admin);
  const userState = useSelector((state) => state.auth);

  const slice = role === "admin" ? adminState : userState;
  const data = role === "admin" ? adminState.admin : userState.user;

  const token = data?.token;
  const actualRole = data?.role;
  const isReady = slice?.initialized;

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimedOut(true);
    }, 1500); // fallback if initialized is stuck

    return () => clearTimeout(timer);
  }, []);

  // ⏳ Wait for Redux hydration
  if (isReady === false && !timedOut) return <p>Loading auth...</p>;

  // 🔐 PRIVATE route: block if not logged in or wrong role
  if (mode === "private") {
    if (!token || actualRole !== role) {
      return <Navigate to={redirectTo} replace />;
    }
  }

  // 🚫 PUBLIC route: block if already logged in
  if (mode === "public") {
    if (token && actualRole === role && location.pathname !== redirectTo) {
      return <Navigate to={redirectTo} replace />;
    }
  }

  return children;
};

export default UniversalRouteGuard;
