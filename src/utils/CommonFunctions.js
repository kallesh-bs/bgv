export const formatDate = (date = new Date()) => {
  // YYYY-MM-DD format
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const todayDate = date.getDate();

  return `${year}-${month.toString().padStart(2, "0")}-${todayDate
    .toString()
    .padStart(2, "0")}`;
};

export const formatNumberToK = (number) => {
  if (number >= 1000) {
    return (number / 1000).toFixed(2) + "k";
  }

  return number.toString();
};

export const camelCaseStringToSnakeCaseString = (string) => {
  return string
    .replace(/\W+/g, " ")
    .split(/ |\B(?=[A-Z])/)
    .map((word) => word.toLowerCase())
    .join("_");
};

export const camelCaseObjectToSnakeCaseObject = (obj) => {
  var updatedKeys = [],
    keyValues = [],
    objNew = {};
  updatedKeys = Object.keys(obj).map((keyName) =>
    keyName
      .replace(/\W+/g, " ")
      .split(/ |\B(?=[A-Z])/)
      .map((word) => word.toLowerCase())
      .join("_")
  );
  keyValues = Object.values(obj).map((value) => {
    if (typeof value === "object") {
      return camelCaseToSnakeCase(value);
    } else {
      return value;
    }
  });
  for (let i = 0; i < updatedKeys.length; i++) {
    objNew[updatedKeys[i]] = keyValues[i];
  }

  return objNew;
};

export const camelCaseToSnakeCase = (value) => {
  if (typeof value === "string") {
    camelCaseStringToSnakeCaseString(value);
  } else if (typeof value === "object") {
    if (Array.isArray(value)) {
      var newArr = [];
      value?.map((obj) => {
        const res = camelCaseObjectToSnakeCaseObject(obj);
        newArr.push(res);
      });

      return newArr;
    } else {
      const res = camelCaseObjectToSnakeCaseObject(value);

      return res;
    }
  }
};

export const isSameSenderMargin = (messages, m, i, userId) => {
  if (
    i < messages.length - 1 &&
    messages[i + 1]?.senderId === m?.senderId &&
    messages[i]?.senderId !== userId
  )
    return 56;
  else if (
    (i < messages.length - 1 &&
      messages[i + 1]?.senderId !== m?.senderId &&
      messages[i]?.senderId !== userId) ||
    (i === messages.length - 1 && messages[i]?.senderId !== userId)
  )
    return 0;
  else return "auto";
};

export const isSameSenderMarginRightSide = (messages, m, i, userId) => {
  if (
    i < messages.length - 1 &&
    messages[i + 1]?.senderId === m?.senderId &&
    messages[i]?.senderId === userId
  )
    return 56;
  else if (
    (i < messages.length - 1 &&
      messages[i + 1]?.senderId !== m?.senderId &&
      messages[i]?.senderId === userId) ||
    (i === messages.length - 1 && messages[i]?.senderId === userId)
  )
    return 0;
  else return "auto";
};

export const getMarginRightForUser = (m, userId) => {
  return m?.senderId !== userId ? "auto" : 10;
};

export function timeSince(date) {
  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " year ago";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " month ago";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " day ago";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hour ago";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minute ago";
  }

  return Math.floor(seconds) + " seconda ago";
}

export const isSameSender = (messages, m, i, userId) => {
  return (
    i < messages.length - 1 &&
    (messages[i + 1]?.senderId !== m?.senderId ||
      messages[i + 1]?.senderId === undefined) &&
    (messages[i]?.senderId !== userId || m?.senderId === userId)
  );
};

export const isLastMessage = (messages, i, userId) => {
  return (
    i === messages.length - 1 &&
    (messages[messages.length - 1]?.senderId !== userId || messages[messages.length - 1]?.senderId === userId) &&
    messages[messages.length - 1]?.senderId
  );
};

export const isSameUser = (messages, m, i) => {
  return i > 0 && messages[i - 1]?.senderId === m?.senderIdd;
};

export const getSender = (activeUser, users) => {
  return activeUser.id === users[0].id ? users[1].name : users[0].name;
};

export const getChatName = (activeChat, activeUser) => {
  return activeChat?.isGroup
    ? activeChat?.chatName
    : activeChat?.users[0]?.id === activeUser.id
      ? activeChat?.users[1]?.name
      : activeChat?.users[0]?.name;
};

export const getChatPhoto = (activeChat, activeUser) => {
  return activeChat?.isGroup
    ? activeChat.photo
    : activeChat?.users[0]?.id === activeUser?.id
      ? activeChat?.users[1]?.profilePic
      : activeChat?.users[0]?.profilePic;
};

export const conditionalFunctions = (index,value) => {
  switch(index){
  case 0 :
    return Boolean(value.match(/[A-Z]/));
  case 1 :
    return Boolean(value.match(/[a-z]/));
  case 2 :
    return Boolean(value.match(/[0-9]/));
  case 3 :
    return value.length >= 8;
  default:
    return false ;
  }
};
