/**
*
* Name: jsonp.js
* Version: 0.1.1
* Description: Simple utility to make (a possibly cross domain) call for JSON data and handle it in a callback.
* Author: P. Envall (petter.envall@gmail.com, @npup)
* Date: 2013-07-09
*
* API:
* jsonp(url, callback[, callbackName]);
*   url           - (string) URL to probe for JSON data
*   callback      - (function) handler of retrieved data
*   callbackName  - (string) optional name for JSONp padding function. Defaults to "c"
*
*/

var win = global, doc = win.document
  , defaultCallbackName = "c"
  , Nonce = (function () {
      var tokenAttr = "data-jsonp-nonce";
      return {
        "set": function (script) {
          var token = ["jsonpId", +new Date, Math.floor(Math.random()*1e+8).toString(16)].join("_");
          return (script.setAttribute(tokenAttr, token), token);
        }
        , "get": function (script) {
          return script.getAttribute(tokenAttr);
        }
      };
    }());

function cleanup() {
  var script = this, nonce = Nonce.get(script);
  script.parentNode.removeChild(script);
  delete win[nonce];
}
function jsonp(url, handler, name) {
  2 < arguments.length || (name = defaultCallbackName);
  var link = doc.createElement("a")
    , script = doc.createElement("script")
    , nonce = Nonce.set(script);
  win[nonce] = handler;
  link.href = url;
  url += [(link.search ? "&" : "?"), name, "=", nonce].join("");
  script.src = url;
  script.onload = script.onerror = cleanup;
  (doc.getElementsByTagName("head")[0] || doc.body).appendChild(script);
}


module.exports = jsonp;
