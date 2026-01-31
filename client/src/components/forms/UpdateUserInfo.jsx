import { useAuth0 } from "@auth0/auth0-react";
import { cn } from "../../lib/utils";
import Button from "../UI/Button";
import Input from "../UI/Input";
import { BlobLoader } from "../UX/Loaders";
import { updateUser } from "../../api/Users";
import { useState } from "react";
import Card from "../UI/Card";

export default function UpdateUserInfo({ onNameUpdated, setNameValid, setShowAccount, className, ...props }) {
  const { user, isLoading, logout, getAccessTokenSilently } = useAuth0();
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState(props.originalEmail);
  const [phoneInput, setPhoneInput] = useState("");
  const [pictureInput, setPictureInput] = useState(null);

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

  function capitalizeInput(value) {
    return value
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  return (
    <Card className="dark:shadow-blue-950 shadow-violet-200 shadow-2xl slideUp">
      <form className={cn(className)} {...props}>
        <h2 className="text-secondary dark:text-white text-3xl mb-7">Update Details</h2>
        <div className="mb-7 gap-4 flex flex-col">
          <Input className="w-full" value={nameInput} onChange={(e) => setNameInput(capitalizeInput(e.target.value))} placeholder="John" label="Name" />
          <Input className="w-full" placeholder="john@gmail.com" type="email" label="Email Address" value={emailInput} />
          <Input className="w-full" placeholder="0412 345 678" label="Phone Number" />
          <Input className="w-full" type="file" label="Profile Picture" />
        </div>
        <Button type="submit" className="w-full" onClick={handleUpdateClick}>
          Update
        </Button>
      </form>
    </Card>
  );
}
