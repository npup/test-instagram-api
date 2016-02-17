// React imports
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, hashHistory as history } from "react-router";

// Components
import App from "./components/App.jsx";
import About from "./components/About.jsx";
import Posts from "./components/Posts.jsx";
import Post from "./components/Post.jsx";

// app imports
import { checkToken, requestToken } from "./util/auth";
import { checkTagName, storeTagName, removeTagName } from "./util/storage";
import mediaLoader from "./util/load-media";


const renderApp = () => {
  const PostsWrapper = React.createClass({
    render() { return <Posts load={load} params={this.props.params} />; }
  });
  ReactDOM.render((
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="/tags" component={PostsWrapper} >
          <Route path="/tags/:tagName" component={Post}/>
        </Route>
        <Route path="/about" component={About}/>
        <Route path="*" component={About}/>
      </Route>
    </Router>
  ), document.getElementById("app"));
};

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
  let tagName = checkTagName();
  if (tagName) {
    removeTagName();
    location.hash = "tags/"+tagName;
  }
  else { location.hash = "about"; }
  renderApp();
};

