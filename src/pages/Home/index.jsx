import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import Button from "../../components/Button";

export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function logOut() {
    dispatch({ type: "user/logout" });
    localStorage.removeItem("user");
    navigate("/login");
  }

  const [user, setUser] = useState({});

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    setUser(userData);
  }, []);

  return (
    <section className="w-full h-full flex flex-col justify-center items-center gap-[24px] ">
      <div className="flex flex-col justify-center items-center gap-[4px] ">
        <h1 className="text-white text-[40px] font-semibold ">
          Now you are logged in!
        </h1>
        <h2 className="text-white font-medium  ">Welcome, @{user?.username}</h2>
      </div>
      <div className="flex justify-center items-center gap-[20px] ">
        <Button
          isWhite
          onClick={() => alert(`Hello, ${user?.fullName}!`)}
          icon="MessageCircle"
        >
          Say Hello
        </Button>
        <Button isWhite onClick={() => logOut()} icon="LogOut">
          Logout
        </Button>
      </div>
    </section>
  );
}
