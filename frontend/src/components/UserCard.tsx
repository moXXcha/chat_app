"use client";

import { useState } from "react";
import { Profile } from "../types";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type Props = {
  profile: Profile;
};
const UserCard = (props: Props) => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const navigate = useNavigate();

  const submit = () => {
    axios
      .post("/api/create/room", {
        targetUserId: props.profile.UserId,
      })
      .then((response) => {
        if (response.status === 200) {
          navigate(`/room/${props.profile.UserId}`);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div
        className="w-full h-20 border border-base-content rounded-md flex items-center px-2"
        onClick={() => setIsModal(true)}
      >
        <img
          className="min-w-16 h-16 rounded-full object-cover mr-2"
          src={props.profile.AvatarUrl}
        />
        <div>
          <p>{props.profile.Name}</p>
          <p className="text-xs">{props.profile.StatusMessage}</p>
        </div>
      </div>
      {isModal ? (
        <div>
          <label
            className="absolute top-0 left-0 w-screen h-screen bg-black opacity-70 flex items-center justify-center"
            onClick={() => setIsModal(false)}
          />
          <div className="w-4/5 h-80 bg-base-100 z-20 absolute top-40 left-0 right-0 mx-auto rounded-md">
            <div className="w-full mx-5 mt-5 relative">
              <img
                className="w-20 h-20 rounded-full object-cover"
                src={props.profile.AvatarUrl}
              />
              <p className="pl-2 font-bold">{props.profile.Name}</p>
              <p className="pl-2">{props.profile.StatusMessage}</p>
            </div>
            <div className="flex justify-center absolute bottom-5 left-0 right-0 mx-auto">
              <button
                className="btn btn-primary mx-auto"
                onClick={() => submit()}
              >
                create
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default UserCard;
