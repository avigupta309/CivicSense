import axios from "axios";
import { useEffect } from "react";
import { useDataContext } from "../Context/ContextApi";

const AuthUser = () => {
  const { setUser, isAuthenticated, setIsAuthenticated } = useDataContext();
  useEffect(() => {
    try {
      axios
        .get("http://localhost:3000/", { withCredentials: true })
        .then((res) => {
          if (res.status === 200) {
            setIsAuthenticated(true);
          }
          const user = res.data.data;
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
