import UserCard from "../components/UserCard";

const CreateMessageRoom = () => {
  return (
    <div className="w-4/5 mx-auto mt-10">
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
      <div className="mt-2 space-y-2">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  );
};

export default CreateMessageRoom;
