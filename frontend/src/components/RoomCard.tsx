const RoomCard = () => {
  return (
    <div className="indicator block w-full">
      <span className="badge badge-secondary indicator-item">99+</span>
      <div
        className="w-full h-20 border border-base-content rounded-md flex items-center px-2"
        onClick={() => {
          console.log("click");
        }}
      >
        <img
          className="min-w-16 h-16 rounded-full object-cover mr-2"
          src="/img/test.PNG"
        />
        <div>
          <p>chacha</p>
          <p className="text-xs">飯食い行こ</p>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
