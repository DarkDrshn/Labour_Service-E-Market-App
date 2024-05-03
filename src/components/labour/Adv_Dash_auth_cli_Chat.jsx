//based on client, show chats
import Chat from "../Newchat";
import React from "react";
import Sidebar from "../Sidebar";

function AdvDashAuthCliChat() {
  return (
    <>
      <div className="flex">
        <div className="w-1/4 pl-2">
          <Sidebar />
        </div>
        <div className="w-3/4 h-screen">
          <div className="m-8 pl-10 pr-10">
          <div className="h-fit">
           <Chat />
          </div>
        </div>
        </div>
        </div>
    </>
  );
}

export default AdvDashAuthCliChat;
