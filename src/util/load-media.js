import jsonp from "./jsonp";
import massage from "./massage";

export default token => {
  return (tag, callback) => {
    const url = `https://api.instagram.com/v1/tags/${tag}/media/recent?access_token=${token}`;
    jsonp(url, response => {
      const posts = response.data.reduce(function (acc, post) {
        post && acc.push(massage(post));
        return acc;
      }, []);
      callback(posts);
    }, "callback");
  };
};
