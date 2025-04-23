import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import LayoutRoute from "./components/LayoutRoute";

// Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function App() {
  const queryClient = new QueryClient();
  const dispatch = useDispatch();

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      dispatch({ type: "user/setUser", payload: JSON.parse(savedUser) });
    }
  }, [dispatch]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ToastContainer
          theme="dark"
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
        />
        <Router>
          <Routes>
            {/* Public routes */}
            <Route element={<LayoutRoute />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>

            {/* Private routes */}
            <Route element={<LayoutRoute isPrivate />}>
              <Route path="/" element={<Home />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </>
  );
}
