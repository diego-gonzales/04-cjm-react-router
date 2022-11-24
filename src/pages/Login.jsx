import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { state  } = useLocation();

  const handleClick = (e) => {
    login();
    navigate(state?.location?.pathname ?? "/"); // Visto en Midudev curso react router v6
  };

  return (
    <div>
      <h3>Login</h3>
      <button onClick={handleClick}>Login</button>
    </div>
  );
};

export default Login;
