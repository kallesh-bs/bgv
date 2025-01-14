export const getHost = () => {
  const host = window.location.host;
  // https://bgv-nine.vercel.app/
  if (host.includes("localhost") || host.includes("staging.deeporion.com") || host.includes('bgv-kallesh-b-ss-projects.vercel.app') || host.includes('bgv-nine.vercel.app')) {
    // return `http://localhost:3000/`;
    // return `https://deeporionback-0cd6e44c3c14.herokuapp.com/`;
    return "https://api.staging.deeporion.com/";
    // return "https://tangerine-rolypoly-583dab.netlify.app/";
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
