import { Outlet } from "react-router-dom";
import "./AdminPanelLayout.css";

function AdminPanelLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default AdminPanelLayout;
