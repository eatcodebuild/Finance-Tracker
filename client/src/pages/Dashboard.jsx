import { useAuth0 } from "@auth0/auth0-react";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import { BlobLoader } from "../components/UX/Loaders";
import { useState } from "react";
import UpdateUserInfo from "../components/forms/UpdateUserInfo";

export default function Dashboard() {
  const { user, isLoading, logout } = useAuth0();
  const [nameInput, setNameInput] = useState("");
  const [displayName, setDisplayName] = useState(user?.name);
  const [nameValid, setNameValid] = useState(user?.name.includes("@") ? false : true);
  const [showAccount, setShowAccount] = useState(false);

  return (
    <div className="flex justify-center min-h-svh items-center bg-white dark:bg-gray-950 relative">
      <div className="absolute top-5 right-5">
        <div className="flex gap-1 justify-end">
          <Button purpose="account" onClick={() => setShowAccount((prev) => !prev)}></Button>
          <Button purpose="darkToggle"></Button>
          <Button onClick={() => logout()}>Logout</Button>
        </div>
        {showAccount && <UpdateUserInfo className="mt-6" onNameUpdated={setDisplayName} setNameValid={setNameValid} setShowAccount={setShowAccount} />}
      </div>
      <div className="flex flex-col justify-center items-center">
        <img src={user?.picture} alt="Profile Picture" className="rounded-full mb-5" />
        <h3 className="mb-5 text-secondary dark:text-white">Welcome, {displayName?.split(" ")[0]}!</h3>
        {!nameValid && <UpdateUserInfo onNameUpdated={setDisplayName} setNameValid={setNameValid} />}
      </div>
    </div>
  );
}
