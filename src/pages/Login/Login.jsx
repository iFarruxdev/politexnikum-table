import { useState } from "react";
import "./Login.css"

const Login = () => {
  const [username, setUsername] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === "iFarruxdev" && code === "2008") {
      localStorage.setItem("access", "true");
      localStorage.setItem("username", username);
      window.location.reload();
    } else {
      setError("Username yoki parol noto‘g‘ri!");
    }
  };

  return (
    <div className="site-auth">
      <div className="site-auth-box">
      <h2 className="site-auth-heading">Kirish</h2>
      <form onSubmit={handleSubmit}>
        <input
            type="text"
            className="site-auth-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username kiriting"
          />
        <input
          type="password"
          className="site-auth-input"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Parolni kiriting"
        />
        <button className="site-auth-btn" type="submit">Kirish</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
};

export default Login;