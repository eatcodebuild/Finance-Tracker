import Card from "../components/card";
import Input from "../components/Input";
import Button from "../components/Button";
import { useThemeContext } from "../hooks/ThemeContext";

export default function Login() {
  const { toggle } = useThemeContext();

  return (
    <div className="flex justify-center min-h-svh items-center">
      <Card>
        <h2 className="text-3xl mb-4 dark:text-white">Login</h2>
        <div className="grid gap-3 mb-6">
          <Input width="w-60" label="Username" />
          <Input width="w-60" label="Password" type="password" />
        </div>
        <Button className="w-full">Login</Button>
      </Card>
      <Button onClick={toggle}>Dark Toggle</Button>
    </div>
  );
}
