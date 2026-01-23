import Card from "../components/UI/Card";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";
import { useThemeContext } from "../hooks/ThemeContext";
import { useAuth0 } from "@auth0/auth0-react";

export default function Login() {
  const { toggle } = useThemeContext();
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="flex justify-center min-h-svh items-center">
      <Card className="bg-lightbg">
        <h2 className="text-4xl mb-6 dark:text-white text-primary">Login</h2>
        <div className="grid gap-3 mb-6">
          <Input width="w-80" label="Username" />
          <Input width="w-80" label="Password" type="password" />
        </div>
        <Button className="w-full" onClick={() => loginWithRedirect()}>Login</Button>
      </Card>
      <Button onClick={toggle}>Dark Toggle</Button>
      <a href="/signup" className="text-secondary">
        signup
      </a>
    </div>
  );
}
