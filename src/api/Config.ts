export const getHost = () => {
  const host = window.location.host;

  if (host.includes("localhost") || host.includes("staging.deeporion.com")) {
    // return `http://localhost:3000/`;
    // return `https://deeporionback-0cd6e44c3c14.herokuapp.com/`;
    return "https://api.staging.deeporion.com/";
    // return `https://api.deeporion.com/`;
  } else if (host.includes("deeporion.com")) {
    return "https://api.deeporion.com/";
  }
};

export const getChatHost = () => {
  const host = window.location.host;

  if (host.includes("localhost") || host.includes("staging.deeporion.com")) {
    // return `ws://localhost:3000/cable`;
    // return `ws://deeporionback-0cd6e44c3c14.herokuapp.com/cable`;
    return `https://api.staging.deeporion.com/cable`;
    // return `https://api.deeporion.com/`;
  } else if (host.includes("deeporion.com")) {
    // return `ws://deeporionback-0cd6e44c3c14.herokuapp.com/cable`;
    return `ws://api.deeporion.com/cable`;
  }
};

export const getNotoficationHost = () => {
  const host = window.location.host;

  if (host.includes("localhost") || host.includes("staging.deeporion.com")) {
    return `http://localhost:3000/`;
    // use for server in future
    // return `ws://deeporionback-0cd6e44c3c14.herokuapp.com/cable`;
    // return `https://api.staging.deeporion.com/`;
    // return `https://api.deeporion.com/`;
  } else if (host.includes("deeporion.com")) {
    return `ws://api.deeporion.com/cable`;
  }
};
