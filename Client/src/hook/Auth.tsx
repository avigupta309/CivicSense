import axios from "axios";
import { useEffect, useState } from "react";
import { useDataContext } from "../Context/FilterContext";

const AuthUser = () => {
  const { setUser } = useDataContext();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  useEffect(() => {
    try {
      axios
        .get("http://localhost:3000/", { withCredentials: true })
        .then((res) => {
          if (res.status === 200) {
            setIsAuthenticated(true);
          }
          const user = res.data.data;
          console.log(user)
          setUser(user);
        })
        .catch((er) => {
          console.log(er.message);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return isAuthenticated;
};

export { AuthUser };
