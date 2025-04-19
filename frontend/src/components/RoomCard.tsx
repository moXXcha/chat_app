import { RoomInfo } from "../types";

type Props = {
  roomInfo: RoomInfo;
};
const RoomCard = (props: Props) => {
  return (
    <div className="indicator block w-full">
      <span className="badge badge-secondary indicator-item">
        {props.roomInfo.Room.NotReadedMessageCount}
      </span>
      <div
        className="w-full h-20 border border-base-content rounded-md flex items-center px-2"
        onClick={() => {
          console.log("click");
        }}
      >
        <img
          className="min-w-16 h-16 rounded-full object-cover mr-2"
          src={props.roomInfo.Profile.AvatarUrl}
        />
        <div>
          <p>{props.roomInfo.Profile.Name}</p>
          <p className="text-xs">飯食い行こ</p>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
