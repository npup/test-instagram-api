import React from "react";
import Post from "./Post.jsx";

export default React.createClass({
  "propTypes": {
      "params": React.PropTypes.object.isRequired
    }
  , getInitialState() {
      return { "posts": [] };
    }
  , componentDidMount() {
      this.init(this.props.params.tagName);
    }
  , componentWillReceiveProps(nextProps){
      this.init(nextProps.params.tagName);
    }
  , init(tagName) {
      this.props.load(tagName, this.setPosts);
    }
  , setPosts(posts) {
      this.setState({ "posts": posts });
    }
  , render() {
      var tagName = this.props.params.tagName;
      return (
        <div>
          <h4>
            Med <a href={"https://www.instagram.com/explore/tags/"+tagName+"/"}>#{tagName}</a> nyligen taggade bilder
          </h4>
          <ul className="posts">
            {
              this.state.posts.map((post, idx) => {
                return <Post key={"post-"+idx} data={post} />;
              })
            }
          </ul>
        </div>
      );
    }
});
