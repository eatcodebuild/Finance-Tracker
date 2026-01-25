import { useAuth0 } from "@auth0/auth0-react";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import { BlobLoader } from "../components/UX/Loaders";
import { useState } from "react";
import UpdateUserInfo from "../components/forms/UpdateUserInfo";
import Navbar from "../components/UI/Navbar";

export default function Dashboard() {
  const { user, isLoading, logout, getAccessTokenSilently } = useAuth0();
  const [nameInput, setNameInput] = useState("");
  const [displayName, setDisplayName] = useState(user?.name);
  const [nameValid, setNameValid] = useState(user?.name.includes("@") ? false : true);
  const [showAccount, setShowAccount] = useState(false);
  const newFirstName = displayName?.split(" ")[0];
  const handleShowAccount = () => setShowAccount((prev) => !prev);
  const handleLogout = () => logout();

  return (
    <div className="min-h-svh items-center bg-white dark:bg-gray-950 relative">
      <Navbar user={user} nameUpdate={newFirstName} handleShowAccount={handleShowAccount} handleLogout={handleLogout} />
      <div className="flex justify-center items-center absolute top-1/2 left-1/2 -translate-1/2">
        {!nameValid && <UpdateUserInfo onNameUpdated={setDisplayName} setNameValid={setNameValid} />}
      </div>
      {showAccount && (
        <div className="flex justify-center items-center absolute top-1/2 left-1/2 -translate-1/2">
          <UpdateUserInfo onNameUpdated={setDisplayName} setNameValid={setNameValid} setShowAccount={setShowAccount} />
        </div>
      )}
    </div>
  );
}
