import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const LogOutFunc = async () => {
  console.log("hello logout is here");
  const navigate = useNavigate();
  
  try {
    const response = await axios.get("http://localhost:3000/api/user/logout", {
      withCredentials: true,
    });
    console.log(response.data);
    toast.success("LogOut SucesssFully");
    navigate("/");
  } catch (error) {
    toast.warning("Cannot LogOut");
  }

  return null;
};
