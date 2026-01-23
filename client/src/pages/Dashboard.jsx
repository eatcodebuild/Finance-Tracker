import { useAuth0 } from "@auth0/auth0-react";
import Button from "../components/UI/Button";
import { useThemeContext } from "../hooks/ThemeContext";

export default function Dashboard() {
  const { toggle, dark } = useThemeContext();
  const { user, isLoading, logout } = useAuth0();
  const firstName = user?.name?.split(' ')[0];

  if (isLoading) {
    return (
    <div className="flex justify-center min-h-svh items-center">
      <div className="loader"></div>
    </div>
    );
  }

  return (
    <div className="flex justify-center min-h-svh items-center bg-white dark:bg-gray-950 relative">
      <div className="flex flex-col justify-center items-center">
        <img src={user?.picture} alt="Profile Picture" className="rounded-full mb-5"/>
        <h3 className="mb-5 text-secondary dark:text-white">Welcome, {firstName}!</h3>
        <Button onClick={() => {logout()}}>Logout</Button>
      </div>
      <Button className="absolute top-5 right-5" onClick={toggle}>{dark ? "Light" : "Dark"}</Button>
    </div>
  );
}
