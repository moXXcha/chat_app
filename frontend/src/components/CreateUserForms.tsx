"use client";
import { useEffect, useState } from "react";
import IconForm from "./IconForm";
import { Link } from "react-router-dom";

const CreateUserForms = () => {
  const [icon, setIcon] = useState<File | null>(null);

  useEffect(() => {
    console.log(icon);
  }, [icon]);
  return (
    <div className="w-4/5 mx-auto mt-24">
      <h1 className="text-2xl mb-10 font-bold">create user</h1>
      <div className="flex flex-col items-center">
        <IconForm setFunc={setIcon} />
      </div>
      <p className="font-bold">nicname</p>
      <input
        type="text"
        placeholder="nicname"
        className="input input-base mb-2"
      />
      <p className="font-bold">status message</p>
      <textarea
        placeholder="status message"
        className="input input-base h-32"
      />
      <div className="flex items-center justify-center mt-3">
        <Link to="/room/create" className="w-full text-center">
          <button className="btn btn-primary">create</button>
        </Link>
      </div>
    </div>
  );
};

export default CreateUserForms;
