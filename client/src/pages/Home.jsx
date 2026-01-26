import Button from "../components/UI/Button";
import { BlobLoader } from "../components/UX/Loaders";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/UI/Navbar";

export default function Home() {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  if (isLoading) return <BlobLoader />;

  return (
    <div className="min-h-svh flex flex-col items-center relative bg-white dark:bg-gray-950">
      <Navbar />
      <div className="flex justify-center items-center grow">
        <div className="text-center flex justify-center flex-col items-center">
          <img src="/logo.svg" className="h-25 mb-7" alt="Logo" />
          <h2 className="text-4xl mb-3 dark:text-white text-secondary">Tracka</h2>
          <p className="mb-7 dark:text-white text-secondary">Keep track of your finances</p>
          <Button className="w-full" onClick={() => loginWithRedirect()}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}
