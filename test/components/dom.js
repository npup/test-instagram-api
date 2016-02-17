/* eslint, global declarations: */
/* global
  global
*/
import jsdom from "jsdom";

// setup document
const doc = jsdom.jsdom("<!DOCTYPE html><html><head><title>foo</title></head><body></body></html>")
  , win = doc.defaultView;

// set globals for mocha that make access to document and window feel
// natural in the test environment
global.document = doc;
global.window = win;

// from mocha-jsdom https://github.com/rstacruz/mocha-jsdom/blob/master/index.js#L80
function propagateToGlobal (window) {
  for (let key in window) {
    if (!window.hasOwnProperty(key)) { continue; }
    if (key in global) { continue; }
    global[key] = window[key];
  }
}

// take all properties of the window object and also attach it to the
// mocha global object
propagateToGlobal(win);
