import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useAuth0();
  
  if (isLoading) return (
    <div className="flex justify-center min-h-svh items-center">
      <div className="loader"></div>
    </div>
  );
  
  return isAuthenticated ? children : <Navigate to="/" />;
}