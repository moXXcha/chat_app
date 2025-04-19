import useSWR from "swr";
import axios from "axios";
import { Link } from "react-router-dom";
import RoomCard from "./RoomCard";
import { useEffect, useState } from "react";
import { RoomInfo } from "../types";

const Rooms = () => {
  const [roomInfos, setRoomInfos] = useState<RoomInfo[]>([]);

  const fetcher = async (url: string) => {
    const response = axios.get(url);
    return response;
  };
  const { data, error, isLoading } = useSWR("/api/rooms", fetcher);

  useEffect(() => {
    if (data) {
      setRoomInfos(data.data.roomInfos);
    }
  }, [data]);
  return (
    <>
      <h1 className="text-2xl font-bold">rooms</h1>
      {isLoading || !data || !roomInfos ? (
        <p>loading...</p>
      ) : (
        <>
          <div className="mt-2 space-y-5">
            {roomInfos.map((roomInfo, i) => (
              <Link to={`/room/${roomInfo.Room.Id}`} className="block" key={i}>
                <RoomCard roomInfo={roomInfo} />
              </Link>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Rooms;
