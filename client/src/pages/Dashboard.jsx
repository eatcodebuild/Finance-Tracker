import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import UpdateUserInfo from "../components/forms/UpdateUserInfo";
import Navbar from "../components/UI/Navbar";
import { useUserData } from "../hooks/useUserData";
import { BlobLoader } from "../components/UX/Loaders";

export default function Dashboard() {
  const { logout } = useAuth0();
  const { userData, setUserData, loading, error } = useUserData();

  const [showAccount, setShowAccount] = useState(false);

  if (loading) return <BlobLoader />;

  if (error) {
    console.error("Failed to load user data:", error);
    return null;
  }

  return (
    <div className="min-h-svh bg-white dark:bg-gray-950 relative">
      <Navbar user={userData} handleShowAccount={() => setShowAccount((prev) => !prev)} handleLogout={logout} />

      {showAccount && (
        <div className="flex justify-center items-center absolute top-1/2 left-1/2 -translate-1/2">
          <UpdateUserInfo
            initialData={userData}
            setShowAccount={setShowAccount}
            onSuccess={(updatedUser) => {
              setUserData(updatedUser); // ← instant UI sync
            }}
          />
        </div>
      )}
    </div>
  );
}
