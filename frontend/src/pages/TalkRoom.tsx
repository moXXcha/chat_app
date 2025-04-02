import Talks from "../components/Talks";

const TalkRoom = () => {
  return (
    <div className="w-4/5 h-full mx-auto">
      <div className="fixed w-4/5 h-[calc(100%-9rem)] overflow-y-auto flex flex-col-reverse scrollbar-hidden">
        <Talks />
      </div>
      <div className="fixed bottom-0 w-4/5 left-0 right-0 mx-auto min-h-10 border border-base-content rounded-md flex items-center p-2 mb-2 bg-base-100">
        <textarea className="w-full min-h-8 focus:outline-none pr-2" />
        <img className="w-5 h-5" src="/svg/unko.svg" alt="" />
      </div>
    </div>
  );
};

export default TalkRoom;
