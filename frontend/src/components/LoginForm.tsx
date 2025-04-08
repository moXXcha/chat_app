import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();
  const submit = (email: string, password: string) => {
    axios
      .post("/api/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.status === 200) {
          navigate("/user/create");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <h1 className="text-2xl mb-10">login</h1>
      <input
        className="block border w-full h-10 mb-2 rounded-md p-2"
        type="text"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="block border w-full h-10 mb-2 rounded-md p-2"
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="w-full flex flex-col items-center">
        <button
          className="border w-1/3 rounded-md h-10 btn btn-primary"
          onClick={() => submit(email, password)}
        >
          login
        </button>
        <Link className="underline" to="/signup">
          signup
        </Link>
      </div>
    </>
  );
};

export default LoginForm;
