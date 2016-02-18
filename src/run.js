// Components
import App from "./components/App";

// app imports
import { checkToken, requestToken } from "./util/auth";
import { checkTagName, storeTagName, removeTagName } from "./util/storage";
import mediaLoader from "./util/load-media";

// configure a bootstrapped loader which checks
// auth when needed and replaces itself with
// an authorized one
let load = null, token = null;
const bootstrappedLoader = config => {
  return (tagName, callback) => {
    if (!token) { token = checkToken(); }
    if (!token) {
      storeTagName(tagName);
      return requestToken(config);
    }
    // replace media loader with configured loader, and use it
    load = mediaLoader(token);
    load(tagName, callback);
  };
};

// bootstrap
export default (config) => {
  token = checkToken();
  load = bootstrappedLoader(config);
  const tagName = checkTagName()
    , root = document.getElementById("app");
  App.setLoader(load).setDOMRoot(root);
  root.appendChild(App.render().element);
  if (tagName) {
    removeTagName();
    location.hash = "/tags/"+tagName;
  }
  else { location.hash = "/about"; }
};

