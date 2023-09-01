import React from "react";
import AdminHeader from "./components/AdminHeader";

function AdminLayout({ children }) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div>
          <AdminHeader />
        </div>
        <main className="flex-grow">{children}</main>
        <footer>All Right Reserved</footer>
      </div>
    </>
  );
}

export default AdminLayout;
