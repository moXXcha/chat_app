"use client";
import { useEffect, useState } from "react";
import IconForm from "./IconForm";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const CreateUserForms = () => {
  const [icon, setIcon] = useState<File | null>(null);
  const [nicname, setNicname] = useState<string>("");
  const [statusMessage, setStatusMessage] = useState<string>("");
  const navigate = useNavigate();
  const { id } = useParams();

  // FormData に必要なデータをセット
  const formData = new FormData();
  // サーバー側で受け取るキー名に合わせる（例："file"）
  if (icon) {
    formData.append("file", icon, icon.name);
  }
  formData.append("nicname", nicname);
  formData.append("status_message", statusMessage);

  const submit = () => {
    axios
      .post("/api/create/profile", formData, {
        params: {
          userId: id,
        },
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          navigate("/room/create");
        }
      })
      .catch((error) => console.log(error));
  };
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
        value={nicname}
        className="input input-base mb-2"
        onChange={(e) => setNicname(e.target.value)}
      />
      <p className="font-bold">status message</p>
      <textarea
        placeholder="status message"
        className="input input-base h-32"
        value={statusMessage}
        onChange={(e) => setStatusMessage(e.target.value)}
      />
      <div className="flex items-center justify-center mt-3">
        <button
          className="btn btn-primary"
          onClick={() => {
            if (icon) {
              submit();
            }
          }}
        >
          create
        </button>
      </div>
    </div>
  );
};

export default CreateUserForms;
