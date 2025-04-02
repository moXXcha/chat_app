"use client";

import { useState } from "react";

const UserCard = () => {
  const [isModal, setIsModal] = useState<boolean>(false);
  return (
    <>
      <div
        className="w-full h-20 border border-base-content rounded-md flex items-center px-2"
        onClick={() => setIsModal(true)}
      >
        <img
          className="min-w-16 h-16 rounded-full object-cover mr-2"
          src="/img/test.PNG"
        />
        <div>
          <p>chacha</p>
          <p className="text-xs">
            とても腰が痛いし空気乾燥してるしトイレ行きたい誰か助けて
          </p>
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
                src="/img/test.PNG"
              />
              <p className="pl-2 font-bold">chacha</p>
              <p className="pl-2">眠すぎて草</p>
            </div>
            <div className="flex justify-center absolute bottom-5 left-0 right-0 mx-auto">
              <button className="btn btn-primary mx-auto">create</button>
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
