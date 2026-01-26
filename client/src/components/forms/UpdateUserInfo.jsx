import { useAuth0 } from "@auth0/auth0-react";
import { cn } from "../../lib/utils";
import Button from "../UI/Button";
import Input from "../UI/Input";
import { BlobLoader } from "../UX/Loaders";
import { updateUser } from "../../api/Users";
import { useState } from "react";

export default function UpdateUserInfo({ onNameUpdated, setNameValid, setShowAccount, className, ...props }) {
  const { user, isLoading, logout, getAccessTokenSilently } = useAuth0();
  const [nameInput, setNameInput] = useState("");

  const handleUpdateClick = async (e) => {
    e.preventDefault();

    const nameRegex = /^[A-Za-z '-]+$/;
    if (!nameRegex.test(nameInput)) {
      return alert("Only letters accepted!");
    }

    try {
      const token = await getAccessTokenSilently({ audience: import.meta.env.VITE_AUTH0_AUDIENCE, scope: "update:users" });
      const updatedUser = await updateUser({ display_name: nameInput, token: token });
      onNameUpdated(updatedUser.display_name);
      setNameValid(true);
      setNameInput("");
      setShowAccount(false);
    } catch (err) {
      console.error(err);
    }
  };

  function capitalizeName(value) {
    return value
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  return (
    <form className={cn(className)} {...props}>
      <div className="flex items-center gap-1">
        <Input value={nameInput} onChange={(e) => setNameInput(capitalizeName(e.target.value))} placeholder="Update Name" />
        <Button type="submit" onClick={handleUpdateClick}>
          Update
        </Button>
      </div>
    </form>
  );
}
