import Card from "../components/UI/Card";
import Button from "../components/UI/Button";
import { BlobLoader } from "../components/UX/Loaders";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useThemeContext } from "../hooks/ThemeContext";

export default function Home() {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
  const { toggle, dark } = useThemeContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  if (isLoading) {
    return <BlobLoader />
  }

  return (
    <div className="flex justify-center min-h-svh items-center relative bg-white dark:bg-gray-950">
      <div className="text-center flex justify-center flex-col items-center">
        <img src="/logo.svg" className="h-25 mb-7" alt="Logo"/>
        <h2 className="text-4xl mb-3 dark:text-white text-secondary">Tracka</h2>
        <p className="mb-7 dark:text-white text-secondary">Keep track of your finances</p>
        <Button className="w-full" onClick={() => loginWithRedirect()}>Login</Button>
      </div>
      <Button className="absolute top-5 right-5" onClick={toggle}>{dark ? "Light" : "Dark"}</Button>
    </div>
  );
}
