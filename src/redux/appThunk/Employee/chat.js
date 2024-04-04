import Helper from "api/Helper";
import apiUrl from "api/apiUrl";
import {
  isLoading,
  setChatUserUpdate,
  setChats,
  setGroupChats,
  setMessages,
  setMyStatus,
  setNotification,
  setRoomId,
  setSearchRsltForChat,
  setSendMessages,
  setUpdateChats
} from "redux/actions/action";
import {
  filterAllGetNotification,
  filterLoginUser,
  filterMessages,
  filterSearchUser,
  filterSendMessages,
  formatCreateChat,
  formatePostNotification,
  formateSendMessage,
  getFilterStatus,
  getGroupChatsForLoggedInUser,
  getOneOnOneChatsForLoggedInUser,
  loggedInUserStatus
} from "redux/selector/Employee/chats";
import swalService from "utils/SwalServices";

export const fetchChatsData = () => async (dispatch) => {
  const path = apiUrl.createChats;
  try {
    const { response } = await Helper.get(path);
    const getOneOnOneChats = getOneOnOneChatsForLoggedInUser(response);
    dispatch(setChats(getOneOnOneChats));
  } catch (err) {
    swalService.showError({ title: "Error!", text: err });
  }
};

export const fetchGroupChatsData = () => async (dispatch) => {
  const path = apiUrl.getGroupChat;
  try {
    const { response } = await Helper.get(path);
    const getGroupChats = getGroupChatsForLoggedInUser(response);
    dispatch(setGroupChats(getGroupChats));
  } catch (err) {
    swalService.showError({ title: "Error!", text: err });
  }
};

export const createChats = (userDetail) => async (dispatch) => {
  try {
    const request = formatCreateChat(userDetail);
    const path = apiUrl.createChats;
    const { response, status } = await Helper.post(request, path);
    if (status === 200 || status === 201) {
      dispatch(fetchChatsData());
      dispatch(setRoomId(response?.chat?.id));
      dispatch(fetchAllMessages(response?.chat?.id));
    }
  } catch (error) {
    console.log(error);
  }
};

export const getChatWithId = (data, chats) => async (dispatch) => {
  try {
    const id = data?.id;
    const path = apiUrl.getChatToId + "/" + id;
    const { response, status } = await Helper.get(path);
    if (status === 200 || status === 201) {
      const getOneOnOneChats = getOneOnOneChatsForLoggedInUser([response]);
      dispatch(setUpdateChats(getOneOnOneChats));
      dispatch(notificationPost(data?.message, chats));
    }
  } catch (err) {
    swalService.showError({ title: "Error!", text: err });
  }
};

export const getChatThroughSecondUserId =
  (userDetail, chats) => async (dispatch) => {
    const userId = userDetail?.id;
    if (userId) {
      const path = apiUrl.showUserChatWithId + `/` + userId;
      const api = apiUrl.showUserChatWithId;
      try {
        const response = await Helper.get(path, api);
        if (response?.status !== 200 && response?.status !== 201) {
          dispatch(setMessages([]));
          dispatch(createChats(userDetail));
        } else {
          const res = await response.json();
          dispatch(setMessages([]));
          dispatch(setRoomId(res?.chat?.chatId));
          dispatch(notificationDelete(res?.chat?.chatId, chats));

          dispatch(fetchAllMessages(res?.chat?.chatId));
        }
      } catch (err) {
        swalService.showError({ title: "Error!", text: err });
      }
    }
  };

export const handleSearchUserForChat = (userName) => async (dispatch) => {
  const path = `${apiUrl.chat}?search=${userName}`;
  const api = `${apiUrl.chat}?search=${userName}`;
  try {
    const response = await Helper.get(path, api);
    const res = await response.json();
    const getfilterSearchUser = filterSearchUser(res?.users);
    dispatch(setSearchRsltForChat(getfilterSearchUser));
  } catch (error) {
    console.log("this is my error", error);
  }
};

export const fetchAllMessages = (chatId) => async (dispatch) => {
  if (chatId) {
    const path = apiUrl.message + `/` + chatId;

    try {
      dispatch(isLoading(true));
      const { response } = await Helper.get(path);
      const getfilterMessages = filterMessages(response?.messages);
      dispatch(setMessages(getfilterMessages));
      dispatch(isLoading(false));
    } catch (err) {
      swalService.showError({ title: "Error!", text: err });
    }
  }
};

export const sendMessageRedux = (formData) => async (dispatch) => {
  try {
    const path = apiUrl.message;
    const { response } = await Helper.post(formData, path, true);
    const res = await response.json();
    const getfilterMessages = filterSendMessages(res.messages[0]);
    dispatch(setSendMessages(getfilterMessages));
  } catch (err) {
    swalService.showError({ title: "Error!", text: err });
  }
};

export const sendMessageWithDocs = (roomId, text) => async (dispatch) => {
  try {
    const request = formateSendMessage(roomId, text);
    const path = apiUrl.message;
    const { response } = await Helper.post(request, path);
    const getfilterMessages = filterSendMessages(response);
    dispatch(setSendMessages(getfilterMessages));
  } catch (err) {
    swalService.showError({ title: "Error!", text: err });
  }
};

export const notificationPost = (data, chats) => async (dispatch) => {
  try {
    const { chatId, id } = data;
    const request = formatePostNotification(chatId, id);
    const path = apiUrl.notification;
    await Helper.post(request, path);
    const selectedChatId = chats
      ?.filter((chat) => !chat.isGroup)
      ?.map((chat) => chat.chatId);
    dispatch(getNotification(selectedChatId));
  } catch (err) {
    swalService.showError({ title: "Error!", text: err });
  }
};

export const getNotification = (searchId) => async (dispatch) => {
  const path = apiUrl.getAllNotificationToChatId;
  const uniqueArray = [...new Set(searchId)];
  try {
    const usersArray = await Promise.all(
      uniqueArray.map(async (id) => {
        if (id) {
          const { response } = await Helper.get(path + "/" + id);
          const res = [response];
          const getfilterNotification = filterAllGetNotification(res);

          return getfilterNotification;
        }
      })
    );
    const notifications = usersArray.reduce((acc, userArray) => {
      if (Array.isArray(userArray)) {
        return acc.concat(userArray);
      }

      return acc;
    }, []);
    const getCounts = notifications.filter((item) => item.count > 0);
    dispatch(setNotification(getCounts));
  } catch (err) {
    swalService.showError({ title: "Error!", text: err });
  }
};

export const notificationDelete = (chatId, chats) => async (dispatch) => {
  const path = `${apiUrl.notification}/${chatId}`;
  try {
    await Helper.delete(path);

    const selectedChatId = chats
      ?.filter((chat) => !chat.isGroup)
      ?.map((chat) => chat.chatId);
    dispatch(getNotification(selectedChatId));
  } catch (err) {
    console.log(err);
  }
};

export const handlePostStatus = () => async (dispatch) => {
  const path = apiUrl.loginStatuses;
  try {
    const request = loggedInUserStatus(true);
    const { response } = await Helper.post(request, path);

    if (response?.data?.user_status) {
      const getFilterUserLoginList = filterLoginUser(response?.data);

      if (getFilterUserLoginList.length > 0) {
        dispatch(setMyStatus(getFilterUserLoginList[0]));
      }
    } else {
      dispatch(handleUpdateStatus(true));
    }
  } catch (err) {
    swalService.showError({ title: "Error!", text: err });
  }
};

export const handleCheckStatus = (userId) => async (dispatch) => {
  try {
    if (userId?.length > 0) {
      const path = `${apiUrl.loginStatusUser}?user_ids=[${userId}]`;
      const {
        response: { data },
      } = await Helper.get(path);
      const filterStatus = getFilterStatus(data);
      dispatch(setChatUserUpdate(filterStatus));
    }
  } catch (err) {
    swalService.showError({ title: "Error!", text: err });
  }
};

export const handleUpdateStatus = (userStatus) => async () => {
  const path = apiUrl.updateStatus;
  try {
    const request = loggedInUserStatus(userStatus);
    const { response } = await Helper.put(request, path);
    const getFilterUserLoginList = filterLoginUser(response?.data);
    console.log("getFilterUserLoginList:", getFilterUserLoginList);
    // if (getFilterUserLoginList.length > 0) {
    //   dispatch(setMyStatus(getFilterUserLoginList[0]));
    // }
  } catch (err) {
    swalService.showError({ title: "Error!", text: err });
  }
};
