import { Link } from "react-router-dom";
import RoomCard from "../components/RoomCard";

const Rooms = () => {
  return (
    <div className="w-4/5 mx-auto mt-10">
      <h1 className="text-2xl font-bold">rooms</h1>
      <div className="mt-2 space-y-5">
        <Link to="/room/1" className="block">
          <RoomCard />
        </Link>
        <Link to="/room/1" className="block">
          <RoomCard />
        </Link>
        <Link to="/room/1" className="block">
          <RoomCard />
        </Link>
        <Link to="/room/1" className="block">
          <RoomCard />
        </Link>
        <Link to="/room/1" className="block">
          <RoomCard />
        </Link>
        <Link to="/room/1" className="block">
          <RoomCard />
        </Link>
        <Link to="/room/1" className="block">
          <RoomCard />
        </Link>
      </div>
    </div>
  );
};

export default Rooms;
