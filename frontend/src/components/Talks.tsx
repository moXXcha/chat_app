"use client";
import { useEffect, useState } from "react";
import Talk from "./Talk";
import axios from "axios";
import { useParams } from "react-router-dom";

const Talks = () => {
  const [message, setMessage] = useState<string>("");
  const [isSetMessage, setIsSetMessage] = useState<boolean>(false);

  const roomId = useParams();

  const submit = (message: string) => {
    axios
      .post(`/api/chat/${roomId.id}`, {
        message: message,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    message.length > 0 ? setIsSetMessage(true) : setIsSetMessage(false);
  }, [message]);
  return (
    <div className="w-4/5 h-full mx-auto mt-16">
      <div className="fixed w-4/5 h-[calc(100%-9rem)] overflow-y-auto flex flex-col-reverse scrollbar-hidden">
        <Talk chatState="chat-start" />
        <Talk chatState="chat-end" />
      </div>
      <div className="fixed bottom-0 w-4/5 left-0 right-0 mx-auto min-h-10 border border-base-content rounded-md flex items-center p-2 mb-2 bg-base-100">
        <textarea
          className="w-full min-h-8 focus:outline-none pr-2"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className="disabled:opacity-50"
          onClick={() => submit(message)}
          disabled={!isSetMessage}
        >
          <img className="w-5 h-5" src="/svg/unko.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Talks;
