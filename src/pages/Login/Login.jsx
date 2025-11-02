import { useState } from "react";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const current_auth_version = "3";

    if (username.trim() === "meuser" && code === "meuser1") {
      localStorage.setItem("access", "user");
      localStorage.setItem("username", username);
      localStorage.setItem("authVersion", current_auth_version);
      window.location.href = "/";
      return;
    }

    if (username.trim() === "adminpolitech" && code === "dangarapolitech") {
      localStorage.setItem("access", "admin");
      localStorage.setItem("username", username);
      localStorage.setItem("authVersion", current_auth_version);
      window.location.href = "/adn/adminpanel/adnHome";
      return;
    }

    setError("Username yoki parol noto‘g‘ri!");
  };

  return (
    <div className="site-auth">
      <div className="site-auth-box">
        <img
          className="site-auth-image"
          src="/uzbekistan-gerb-image.png"
          alt="Uzbekistan gerb image for login modal"
          srcSet="/uzbekistan-gerb-image.png 1x , /uzbekistan-gerb-image@2x.png 2x"
          width={40}
          height={40}
        />
        <h2 className="site-auth-heading">
          Dang'ara shahrining 1-politexnikum kollejiga kirish tizimi
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="site-auth-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username kiriting"
            required
          />
          <input
            type="password"
            className="site-auth-input"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Parolni kiriting"
            required
          />
          <button className="site-auth-btn" type="submit">
            Kirish
          </button>
        </form>
        {error && (
          <p style={{ color: "red", marginRight: "auto", marginTop: "10px" }}>
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;