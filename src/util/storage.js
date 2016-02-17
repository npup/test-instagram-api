const shim = {};
const win = global, has = "localStorage" in win
  , api = {
    "get": has ? key => { return win.localStorage.getItem(key); }
      : (key) => { return shim[key]; } // dummy impl
    , "set": has ? (key, value) => { return win.localStorage.setItem(key, value); }
      : (key, value) => { shim[key] = String(value); } // dummy impl
    , "remove": has ? key => { win.localStorage.removeItem(key); }
      : key => { delete shim[key]; }
  };

const storeTagName = (tagName) => {
  api.set("tagName", tagName);
  return tagName;
};
const checkTagName = () => {
  return api.get("tagName");
};
const removeTagName = () => {
  api.remove("tagName");
};

export {
  storeTagName
  , checkTagName
  , removeTagName
};
