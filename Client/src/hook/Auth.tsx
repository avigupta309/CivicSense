import { useEffect } from "react";
import { useDataContext } from "../Context/FilterContext";
import axios from "axios";

export const CheckAuthUser = () => {
  const { setUser } = useDataContext();

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await axios.get("http://localhost:3000", {
          withCredentials: true,
        });

        setUser(response.data.user); 
      } catch (error) {
        setUser(null);
      }
    }

    fetchUser(); 
  }, [setUser]);

  return null;
};
