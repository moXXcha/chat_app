"use client";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();
  const submit = () => {
    axios
      .post("/api/logout")
      .then((response) => {
        if (response.status === 200) {
          navigate("/login");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <button onClick={() => submit()} className="text-3xl ml-4">
      <img src="/svg/logout.svg" className="h-10 w-10" />
    </button>
  );
};

export default LogoutButton;
