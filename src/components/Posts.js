import { E, T } from "./util";

const fmtDate = ts => {
  return (new Date(ts)).toISOString().replace(/T|\:\d{2}\.\d{3}Z/g, " ").trim();
};

export default tagName => {

  let load = null;

  const hook = frag => {
    const list = frag.querySelector("ul.posts");
    if (!load) { return; }
    load(tagName, posts => {
      list.innerHTML = "";
      posts.forEach(post => {
        const username = post.username
          , ts = post.ts, dateStr = fmtDate(ts);
        list.appendChild(
          T(E("li"), [
              E("a", {"class": "author", "href": "https://instagram.com/"+username, "html": "@"+username})
              , ", "
              , E("span", {"class": "ts", "data-ts": ts, "html": dateStr})
              , E("img", {"src": post.img.thumb})
              , E("p", {"class": "caption", "html": post.text})
            ]
          ).element
        );
      });
    });
  };

  return {
    render(runHook=true) {
        const frag = document.createDocumentFragment();
        T({"element": frag}, [
          T(E("h4"), ["Med ", E("a", {"href": "https://www.instagram.com/explore/tags/"+tagName+"/", "html": "#"+tagName}), " nyligen taggade bilder"])
          , T(E("ul", {"class": "posts"}), [])
        ]);
        runHook && hook(frag);
        return {"element": frag};
      }
    , setLoader(loader) {
        load = loader;
        return this;
      }
  };
};
