const initialstate = {
  searchResult: [],
  userDetail: {},
  groupChats: [],
  chats: [],
  message: [],
  sendmessage: [],
  activeChat: [],
  isLoading: false,
  notifications: [],
  userList: [],
  roomId: null,
  usersStatus: [],
  myStatus: {},
  showProfile: false,
};

export const userSearchReducer = (state = initialstate, action) => {
  switch (action.type) {
  case "SET_SHOW_PROFILE":
    return { ...state, showProfile: action.payload };

  case "SET_ROOMID":
    return { ...state, roomId: action.payload };

  case "SET_MY_STATUS":
    return { ...state, myStatus: action.payload };

  case "SET_CHAT_USERS_STATUS":
    return { ...state, usersStatus: action.payload };

  case "SET_SEARCH_RESULT_FOR_CHAT":
    return { ...state, searchResult: action.payload };

  case "SET_USERNAME": {
    const isSameUser =
        JSON.stringify(state.userDetail) === JSON.stringify(action.payload);

    return {
      ...state,
      userDetail: isSameUser ? state.userDetail : action.payload,
      message: isSameUser ? state.message : [],
    };
  }
  case "SET_CHATS":
    return { ...state, chats: action.payload };

  case "SET_UPDATE_CHATS":
    return { ...state, chats: [...state.chats, action.payload] };

  case "SET_GROUP_CHATS":
    return { ...state, groupChats: action.payload };

  case "SET_NOTIFICATION": {
    return { ...state, notifications: action.payload };
  }

  case "SET_NOTIFICATION_UPDATE":
    return { ...state, notifications: action.payload };

  case "SET_ACTIVECHAT":
    return { ...state, activeChat: action.payload };

  case "SET_MESSAGES":
    return { ...state, message: action.payload };

  case "SET_SENDMESSAGES":
    return {
      ...state,
      sendmessage: action.payload,
      message: state.message.concat(action.payload),
    };

  case "SET_BROADCASTEDMESSAGE": {
    const isMessagePresent = state.message.some(
      (msg) => msg.id === action.payload.id
    );

    return {
      ...state,
      message: isMessagePresent
        ? state.message
        : [...state.message, action.payload],
    };
  }

  case "SET_USERLIST":
    return { ...state, userList: action.payload };

  default:
    return state;
  }
};

export default userSearchReducer;
