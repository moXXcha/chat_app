import React from "react";

type Props = {
  chatState: string;
};
const Talk = (props: Props) => {
  return (
    <div className={`chat chat-end ${props.chatState}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </div>
      <div className="chat-header">
        towa
        <time className="text-xs opacity-50">12:46</time>
      </div>
      <div className="chat-bubble">こんやっぴー</div>
      <div className="chat-footer opacity-50">Seen at 12:46</div>
    </div>
  );
};

export default Talk;
