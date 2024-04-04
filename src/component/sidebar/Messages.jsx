import React, { useEffect } from "react";
import { content } from "../../utils/constant/Content";
import { useDispatch, useSelector } from "react-redux";
import {
  setShowGroupList,
  setUsername,
  setNotificationUpdate,
  isLoading,
  setMessaegUserList,
  setShowProfile
} from "../../redux/actions/action";
import {
  fetchChatsData,
  getNotification,
  handleCheckStatus
} from "redux/appThunk/Employee/chat";
import PropTypes from "prop-types";
import { awsURL } from "utils/Constants";

export default function Messages({ selectedUser, setSelectedUser }) {
  const userData = JSON.parse(localStorage.getItem("userLoginToken"));

  const dispatch = useDispatch();
  const { chats, userList, notifications, usersStatus } = useSelector(
    (state) => state.userSearchReducer
  );
  const handleCreateChat = (item) => {
    setSelectedUser(item);
    dispatch(isLoading(true));
    dispatch(setShowProfile(false));
    dispatch(setUsername(item));
    dispatch(setShowGroupList(false));
    if (notifications && notifications.length > 0) {
      const updateNotification = notifications.filter(
        (note) => note?.senderId !== item?.id
      );
      dispatch(setNotificationUpdate(updateNotification));
    }
  };

  const handleFirstUser = async () => {
    if (userData) {
      dispatch(fetchChatsData());
    }
  };
  const handleChat = async (searchId) => {
    if (searchId) {
      dispatch(getNotification(searchId));
    }
  };

  const displayStatus = (item) => {
    const check = usersStatus.find((status) => status?.userId === item?.id);
    if (check) {
      return check?.userStatus;
    }
  };

  useEffect(() => {
    handleFirstUser();
  }, []);

  useEffect(() => {
    const handleChatWhenChatsUpdate = () => {
      const UserId = userData?.id;
      // const selectedUser = chats.map((chat) =>
      //   chat?.users?.find((chat) => chat?.id !== UserId)
      // );

      const selectedUser = chats
        .filter((chat) => chat?.isUsed)
        .map((chat) => chat?.users?.find((item) => item?.id !== UserId));

      const selectedUserId = chats.map(
        (chat) => chat?.users?.find((chat) => chat?.id !== UserId)?.id
      );

      const selectedChatId = chats
        ?.filter((chat) => !chat.isGroup)
        ?.map((chat) => chat.chatId);
      dispatch(setMessaegUserList(selectedUser));

      dispatch(handleCheckStatus(selectedUserId));
      handleChat(selectedChatId);
    };
    handleChatWhenChatsUpdate();
  }, [chats]);

  return (
    <div className="w-full h-full flex flex-col py-1">
      <div className="w-full h-[2.5rem] pl-2 flex justify-between items-center rounded-lg">
        <div className="flex justify-start items-center space-x-1">
          <h5>{content.messages}</h5>
        </div>
      </div>
      {userList?.length > 0 &&
        userList?.map((item) => (
          <div
            className={`w-full h-[2.5rem] pl-2 flex justify-start items-center space-x-4 rounded-lg cursor-pointer
            whitespace-nowrap relative hover:bg-[#ffffff33] ${
          selectedUser?.id === item?.id ? "bg-[#ffffff33]" : ""
          }`}
            key={item?.id}
            onClick={() => handleCreateChat(item)}
          >
            <div className="h-6 w-8 rounded-full relative overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={`${awsURL}/images/profile.jpg`}
                alt={item?.img}
              />
            </div>
            {displayStatus(item) && (
              <p className="w-[10px] h-[10px] rounded-full z-20 top-[22px] absolute bg-[#0f0]"></p>
            )}
            <div className="w-full flex items-center justify-start">
              <p>{item?.full_name || item?.email?.split("@")[0] || "noName"}</p>
            </div>
            {notifications?.map(
              (countItem) =>
                countItem?.senderId === item?.id &&
                countItem?.count > 0 && (
                  <div key={countItem?.messageId}
                    className="absolute right-[10px] bg-[#ff7914] rounded-[50%] w-[20px]
                  h-[20px] text-[12px] flex items-center justify-center"
                  >
                    <span className="mt-[2px] mr-[2px]">{countItem?.count}</span>
                  </div>
                )
            )}
          </div>
        ))}
    </div>
  );
}

Messages.propTypes = {
  selectedUser: PropTypes.array,
  setSelectedUser: PropTypes.func,
};
