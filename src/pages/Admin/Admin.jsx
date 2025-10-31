import { useState , useEffect } from 'react';
import './Admin.css';

const Admin = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem('admin-auth');
    if (auth === 'true') setIsAuthenticated(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === '2008') {
      setIsAuthenticated(true);
      localStorage.setItem('admin-auth', 'true');
    } else {
      alert("Noto‘g‘ri parol! Qayta urinib ko‘ring.");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="admin-login">
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Admin panelga kirish</h2>
          <input
            type="password"
            placeholder="Parolni kiriting"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Kirish</button>
        </form>
      </div>
    );
  }

  return (
    <section className="index-admin">
      <h1>Admin sahifasi</h1>
    </section>
  );
};

export default Admin;