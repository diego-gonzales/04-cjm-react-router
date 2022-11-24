import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Dashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div>
      <h3>Dashboard</h3>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
