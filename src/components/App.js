import { E, T } from "./util";

import About from "./About";
import Posts from "./Posts";

const Trav = Posts("trav")
  , Galopp = Posts("galopp");

let root, load;

global.onhashchange = () => {
  var view = location.hash.substring(2)
    , content = {
      "tags/trav": Trav.setLoader(load)
      , "tags/galopp": Galopp.setLoader(load)
    }[view] || About;
  root.innerHTML = "";
  root.appendChild(renderApp(content).element);
};

// content === false or content == null means "shallow render"
const renderApp = (content=About) => {
  const frag = document.createDocumentFragment();
  T({"element": frag}, [
    T(E("div", {"class": "main"}), [
      E("h1", {"class": "slanted", "html": "Taggat!"})
      , T(E("ul", {"class": "nav"}), [
          T(E("li"), [E("a", {"class": "slanted "+(Trav==content?"active":""), "href": "#/tags/trav", "html": "Trav"})])
          , T(E("li"), [E("a", {"class": "slanted "+(Galopp==content?"active":""), "href": "#/tags/galopp", "html": "Galopp"})])
          , T(E("li"), [E("a", {"class": "slanted "+(About==content?"active":""), "href": "#/about", "html": "Om"})])
        ])
      , content && content.render()
    ])
  ]);
  return {"element": frag};
};

export default {
  "render": renderApp
  , setLoader(loader) {
      load = loader;
      return this;
    }
  , setDOMRoot(elem) {
      root = elem;
    }
};
