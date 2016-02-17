const checkToken = () => {
  const value = location.hash.split(/^#access_token=/)[1];
  return value ? value : void 0;
};

const requestToken = (config) => {
  const url = `https://www.instagram.com/oauth/authorize/?client_id=${config.clientId}&redirect_uri=${config.callback}&response_type=token&scope=public_content`;
  return location.href = url;
};

export {
  checkToken
  , requestToken
};
