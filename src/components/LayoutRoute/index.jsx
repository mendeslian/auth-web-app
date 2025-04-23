import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function LayoutRoute({ isPrivate = false }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const isAuthenticated = user && user?.token;

  if (isPrivate && !isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (isAuthenticated && location.pathname === "/login") {
    return <Navigate to="/" />;
  }

  return (
    <section className="w-full h-screen flex relative">
      <Outlet />
    </section>
  );
}
