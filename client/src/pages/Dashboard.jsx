import { useAuth0 } from "@auth0/auth0-react";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import { BlobLoader } from "../components/UX/Loaders";
import { useThemeContext } from "../hooks/ThemeContext";
import { updateUser } from "../api/Users";
import { useState } from "react";

export default function Dashboard() {
  const { toggle, dark } = useThemeContext();
  const { user, isLoading, logout } = useAuth0();
  const [nameInput, setNameInput] = useState("");
  const [displayName, setDisplayName] = useState(user?.name);

  if (isLoading) return <BlobLoader />;

  const handleUpdateClick = async () => {
    try {
      const updatedUser = await updateUser({ name: nameInput, userId: user.sub });
      setDisplayName(updatedUser.name); // re-render the new name
      setNameInput(""); // clear input after update
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center min-h-svh items-center bg-white dark:bg-gray-950 relative">
      <Button className="absolute top-5 right-5" onClick={toggle}>
        {dark ? "Light" : "Dark"}
      </Button>
      <div className="flex flex-col justify-center items-center">
        <img src={user?.picture} alt="Profile Picture" className="rounded-full mb-5"/>
        <h3 className="mb-5 text-secondary dark:text-white">Welcome, {displayName?.split(' ')[0]}!</h3>
        <Input
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          placeholder="Update Name"
        />
        <Button onClick={handleUpdateClick}>Update Name</Button>
        <Button onClick={() => logout()}>Logout</Button>
      </div>
    </div>
  );
}