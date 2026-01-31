import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import UpdateUserInfo from "../components/forms/UpdateUserInfo";
import Navbar from "../components/UI/Navbar";
import { useUserData } from "../hooks/useUserData";
import { BlobLoader } from "../components/UX/Loaders";

export default function Dashboard() {
  const { user, logout } = useAuth0();
  const { userData, loading, error } = useUserData();

  const [nameInput, setNameInput] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [nameValid, setNameValid] = useState(user?.name.includes("@") ? false : true);
  const [showAccount, setShowAccount] = useState(false);

  const handleShowAccount = () => setShowAccount((prev) => !prev);
  const handleLogout = () => logout();

  useEffect(() => {
    if (userData?.display_name) {
      setDisplayName(userData.display_name);
    } else if (user?.name) {
      setDisplayName(user.name);
    }
  }, [userData, user]);

  if (loading) return <BlobLoader />;

  if (error) {
    console.error("Failed to load user data:", error);
  }

  console.log("User data from DB:", userData);

  return (
    <div className="min-h-svh items-center bg-white dark:bg-gray-950 relative">
      <Navbar user={userData} nameUpdate={displayName} handleShowAccount={handleShowAccount} handleLogout={handleLogout} />
      <div className="flex justify-center items-center absolute top-1/2 left-1/2 -translate-1/2">
        {!nameValid && <UpdateUserInfo onNameUpdated={setDisplayName} setNameValid={setNameValid} originalEmail={user?.email} />}
      </div>
      {showAccount && (
        <div className="flex justify-center items-center absolute top-1/2 left-1/2 -translate-1/2">
          <UpdateUserInfo onNameUpdated={setDisplayName} setNameValid={setNameValid} setShowAccount={setShowAccount} />
        </div>
      )}
    </div>
  );
}
