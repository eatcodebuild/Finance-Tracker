import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { getUser } from "../api/users";

export function useUserData() {
  const { getAccessTokenSilently } = useAuth0();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = await getAccessTokenSilently({
          audience: import.meta.env.VITE_AUTH0_AUDIENCE,
        });

        const user = await getUser({ token });
        setUserData(user);
      } catch (err) {
        setError(err);
        console.error("Error grabbing user:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [getAccessTokenSilently]);

  return { userData, setUserData, loading, error };
}
