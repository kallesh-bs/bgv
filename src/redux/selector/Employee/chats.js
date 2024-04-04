export const getOneOnOneChatsForLoggedInUser = (response) => {
  const requiredResponse = [];

  response?.map((obj) =>
    requiredResponse.push({
      chatId: obj?.chatId,
      users: obj?.users,
      isUsed: obj?.isUsed,
    })
  );

  return requiredResponse;
};

export const getGroupChatsForLoggedInUser = (response) => {
  const requiredResponse = [];

  response?.map((obj) =>
    requiredResponse.push({
      chatId: obj?.chatId,
      groupName: obj?.chat_name,
      users: obj?.users,
      isGroup: obj?.isGroup,
    })
  );

  return requiredResponse;
};

export const formatCreateChat = (userDetail) => {
  return {
    second_user: userDetail?.id,
    chat_name: "string",
  };
};

export const filterSearchUser = (response) => {
  const requiredResponse = [];

  response?.map((obj) =>
    requiredResponse.push({
      email: obj?.email,
      name: obj?.full_name || obj?.name,
      id: obj?.id,
    })
  );

  return requiredResponse;
};

export const formateSendMessage = (roomId, text) => {
  return {
    id: roomId,
    content: text,
  };
};

export const formatePostNotification = (chatId, messageId) => {
  return {
    notifications: {
      message_id: messageId,
      chatId: chatId,
    },
  };
};

export const loggedInUserStatus = (status) => {
  return {
    login_status: {
      user_status: status,
    },
  };
};

export const filterAllGetNotification = (response) => {
  const requiredResponse = [];

  response?.map((obj) => {
    requiredResponse.push({
      chatId: obj?.chatId,
      count: obj?.unread_notifications,
      senderId: obj?.senderId,
      receiverId: obj?.receiverId,
      messageId: obj?.messageId,
    });
  });

  return requiredResponse;
};

export const filterLoginUser = (response) => {
  const requiredResponse = [];
  const res = [response];
  res?.map((obj) => {
    requiredResponse.push({
      id: obj?.id,
      userId: obj?.user_id,
      userStatus: obj?.user_status,
    });
  });

  return requiredResponse;
};

export const getAllUsersStatus = (response) => {
  const requiredResponse = [];
  response?.map((obj) => {
    requiredResponse.push({
      id: obj?.id,
      userId: obj?.user_id,
      userStatus: obj?.user_status,
    });
  });

  return requiredResponse;
};

export const getFilterStatus = (response) => {
  const requiredResponse = [];
  response?.map((obj) => {
    requiredResponse.push({
      id: obj?.id,
      userId: obj?.user_id,
      userStatus: obj?.user_status,
    });
  });

  return requiredResponse;
};

export const filterMessages = (response) => {
  const requiredResponse = [];
  response?.map((obj) =>
    requiredResponse.push({
      chatId: obj?.chatId,
      content: obj?.content,
      id: obj?.id,
      senderId: obj?.senderId,
      files: obj?.images_url[0] || null,
      senderName: obj?.senderName,
      users: obj?.users,
      createdAt: obj?.createdAt,
    })
  );

  return requiredResponse;
};

export const filterSendMessages = (response) => {
  const requiredResponse = [];

  requiredResponse.push({
    chatId: response?.chatId,
    content: response?.content,
    id: response?.id,
    files: response?.images_url,
    senderId: response?.senderId,
    senderName: response?.senderName,
    users: response?.users,
    createdAt: response?.createdAt,
  });

  return requiredResponse;
};

export const notification = (response, userData) => {
  const requiredResponse = [];
  const receiverId = response?.message?.users?.find(
    (user) => user?.id === userData?.id
  )?.id;

  requiredResponse.push({
    chatId: response?.message?.chatId,
    content: response?.message?.content,
    id: response?.message?.id,
    senderId: response?.message?.senderId,
    receiverId: receiverId,
    senderName: response?.message?.senderName,
    users: response?.message?.users,
    createdAt: response?.message?.createdAt,
  });

  return requiredResponse;
};

export const filterMessageUserList = (response) => {
  const requiredResponse = [];
  if (!Array.isArray(response)) {
    requiredResponse.push({
      id: response?.user?.id,
      name: response?.user?.full_name,
      img: response?.user?.img,
      email: response?.user?.email,
    });

    return requiredResponse;
  }
};
