import axios from "axios";
import UserCard from "./UserCard";
import useSWR from "swr";
import { Profile } from "../types";
import { useEffect, useState } from "react";

const CreateRoom = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);

  const fetcher = async (url: string) => {
    const response = await axios.get(url);
    return response;
  };
  const { data, error, isLoading } = useSWR("/api/users", fetcher);

  useEffect(() => {
    if (data) {
      setProfiles(data.data.profiles);
    }
  }, [data]);
  return (
    <>
      <h1 className="text-2xl font-bold">create room</h1>
      <div className="border border-base-content rounded-md w-full h-full flex items-center px-2 mt-2">
        <img
          src="/svg/serch.svg"
          className="w-5 h-5 my-auto"
          alt=""
          onClick={() => {
            console.log("click");
          }}
        />
        <input
          type="text"
          className="w-full p-2 focus:outline-none focus:border-none"
          placeholder="type username"
        />
      </div>
      <label className="underline block h-[1px] bg-base-content mt-2" />
      {isLoading || !profiles ? (
        <p>cant find</p>
      ) : (
        <div className="mt-2 space-y-2">
          <>
            {profiles.map((profile: Profile) => (
              <UserCard profile={profile} key={profile.Id} />
            ))}
          </>
        </div>
      )}
    </>
  );
};

export default CreateRoom;
