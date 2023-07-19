import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  localStorage.removeItem("userToken");
  navigate("/");
};

export default Logout;
