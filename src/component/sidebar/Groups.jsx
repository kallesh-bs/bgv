import React, { useEffect, useState } from "react";
import { BsPlus } from "react-icons/bs";
import { MdChevronLeft } from "react-icons/md";
import { content } from "../../utils/constant/Content";
import { useDispatch, useSelector } from "react-redux";
import { setShowGroup, setShowGroupList } from "../../redux/actions/action";
import { setUsername } from "../../redux/actions/action";
import { fetchGroupChatsData } from "redux/appThunk/Employee/chat";
import PropTypes from "prop-types";
import { awsURL } from "utils/Constants";
import { t } from "i18next";

export const Groups = ({ selectedUser, setSelectedUser }) => {
  const [addGroup, setAddGroup] = useState(false);
  const [groupList, setGroupList] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const { groupChats } = useSelector((state) => state.userSearchReducer);
  const dispatch = useDispatch();
  const visibleGroupChats = showAll ? groupChats : groupChats.slice(0, 5);
  const [rotated, setRotated] = useState(true);

  const handleClick = () => {
    setRotated(!rotated);
  };

  const handleCreateGroupChat = () => {
    dispatch(setShowGroup(true));
    setAddGroup(!addGroup);
  };

  const handleGroupChat = (item) => {
    setSelectedUser(item);
    dispatch(setUsername(item));
    dispatch(setShowGroupList(false));
  };

  useEffect(() => {
    dispatch(fetchGroupChatsData());
  }, []);

  const handleGroup = () => {
    dispatch(setShowGroupList(true));
    setGroupList(!groupList);
  };

  return (
    <div className="border-b-[1px] border-[rgba(242,246,255,0.20)] pb-[10px]">
      <div className="w-full h-full flex flex-col py-1 space-y-1">
        <div className="w-full h-[2.814rem] flex justify-between items-center cursor-pointer">
          <div className="flex justify-start items-center space-x-1 p-0">
            <MdChevronLeft
              className={`w-6 h-6 transition-transform transform ${
                rotated ? "-rotate-90" : "-rotate-180"
              }`}
              onClick={handleClick}
            />
            <h5 onClick={handleGroup} className="w-[9rem]">
              {content.groups}
            </h5>
          </div>
          <div className="w-full flex justify-end items-center">
            <BsPlus className="w-6 h-6" onClick={handleCreateGroupChat} />
          </div>
        </div>
      </div>
      {(rotated || showAll) &&
        visibleGroupChats &&
        visibleGroupChats.length > 0 &&
        visibleGroupChats.map((group, i) => (
          <div
            className={`w-full h-[2.5rem] pl-2 flex justify-start items-center space-x-4 rounded-lg cursor-pointer
         whitespace-nowrap hover:bg-[#ffffff33] ${
          selectedUser?.chatId === group?.chatId ? `bg-[#ffffff33]` : ``
          }`}
            key={i}
            onClick={() => handleGroupChat(group)}
          >
            <div className="h-6 w-8 rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={`${awsURL}/images/chat_active.jpg`}
                alt="Group_Icon"
              />
            </div>
            <div className="w-full flex items-center justify-start">
              <p>{group.groupName || "Default"}</p>
            </div>
          </div>
        ))}
      {!showAll && groupChats && groupChats.length > 5 && rotated && (
        <button
          onClick={() => setShowAll(true)}
          className="underline text-xs pl-2"
        >
          {t("viewMore")}
        </button>
      )}
      {showAll && (
        <button
          onClick={() => setShowAll(false)}
          className="underline text-xs pl-2"
        >
          {t("viewLess")}
        </button>
      )}
    </div>
  );
};

Groups.propTypes = {
  selectedUser: PropTypes.array,
  setSelectedUser: PropTypes.func,
};
