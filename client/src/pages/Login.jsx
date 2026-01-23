import Card from "../components/UI/Card";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";
import { useThemeContext } from "../hooks/ThemeContext";

export default function Login() {
  const { toggle } = useThemeContext();

  return (
    <div className="flex justify-center min-h-svh items-center">
      <Card className="bg-lightbg">
        <h2 className="text-4xl mb-6 dark:text-white text-primary">Login</h2>
        <div className="grid gap-3 mb-6">
          <Input width="w-80" label="Username" />
          <Input width="w-80" label="Password" type="password" />
        </div>
        <Button className="w-full">Login</Button>
      </Card>
      <Button onClick={toggle}>Dark Toggle</Button>
      <a href="/signup" className="text-secondary">
        signup
      </a>
    </div>
  );
}
