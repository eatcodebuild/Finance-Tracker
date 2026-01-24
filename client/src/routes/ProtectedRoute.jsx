import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { BlobLoader } from "../components/UX/Loaders";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useAuth0();
  
  if (isLoading) return <BlobLoader />;
  
  return isAuthenticated ? children : <Navigate to="/" />;
}