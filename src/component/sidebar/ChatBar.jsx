import React, { useState } from "react";
import { BsChatDots } from "react-icons/bs";
import { content } from "../../utils/constant/Content";
import {Groups} from "./Groups";
import Messages from "./Messages";

export default function ChatBar() {
  const [selectedUser, setSelectedUser] = useState([]);

  return (
    <nav className="h-fit w-full z-20 px-2 flex flex-col space-y-3 text-white">
      <div className="w-full pl-4 flex items-center justify-start space-x-3">
        <BsChatDots className="w-5 h-5 stroke-white -scale-x-100" />
        <h5 className="text-lg">{content.replies}</h5>
      </div>
      <Groups setSelectedUser={setSelectedUser} selectedUser={selectedUser}/>
      <Messages setSelectedUser={setSelectedUser} selectedUser={selectedUser}/>
    </nav>
  );
}
