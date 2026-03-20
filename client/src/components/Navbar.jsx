import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div style={styles.nav}>
      <h2>AI Content Generator</h2>
      <div style={styles.right}>
        <span>{user?.name}</span>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 24px",
    background: "#111827",
    color: "#fff",
  },
  right: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
};

export default Navbar;