import Card from "../components/UI/Card";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";
import { useThemeContext } from "../hooks/ThemeContext";

export default function Signup() {
  const { toggle } = useThemeContext();

  return (
    <div className="flex justify-center min-h-svh items-center">
      <Card className="bg-gray-100">
        <h2 className="text-4xl mb-6 dark:text-white text-secondary">Create Account</h2>
        <div className="grid gap-3 mb-6 grid-cols-2">
          <Input colsClass="col-span-1" label="First Name" />
          <Input colsClass="col-span-1" label="Last Name" />
          <Input colsClass="col-span-2" width="w-full" label="Email Address" type="email" />
          <Input colsClass="col-span-2" width="w-full" label="Password" type="password" />
        </div>
        <Button className="w-full">Let's Go!</Button>
      </Card>
      <Button onClick={toggle}>Dark</Button>
      <a href="/login" className="text-secondary">
        login
      </a>
    </div>
  );
}
