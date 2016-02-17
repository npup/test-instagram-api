import assert from "proclaim";

import dom from "./dom";
import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";

import Posts from "../../src/components/Posts";
import { createPost } from "./helpers";

describe("Posts", () => {

  describe("rendering", () => {

    const createPosts = data => {
      return data.map(entry => {
        return createPost(data[0], data[1]);
      });
    };

    before(function() {
      const posts = createPosts([
          ["Foo", "It's foo"]
          , ["Bar", "It's bar"]
          , ["Yellow", "I am curious yellow"]
        ])
        , params = {"tagName": "foo-ish"};
      const l = (tagName, callback) => { callback(posts); };
      this.tagName = params.tagName;
      this.renderedContainer = TestUtils.renderIntoDocument( <Posts params={params} load={l} /> );
    });

    it("should render a heading with a link to the Instagram page for the tag name", function () {
      const heading = ReactDOM.findDOMNode(this.renderedContainer).querySelector("h4");
      assert.isNotNull(heading, "did not find heading");
      const link = heading.querySelector("a");
      assert.isNotNull(link, "did not find link");
      assert.equal(link.getAttribute("href"), "https://www.instagram.com/explore/tags/"+this.tagName+"/");
    });

    it("should render a list containing the posts", function () {
      const list = ReactDOM.findDOMNode(this.renderedContainer).querySelector("ul");
      assert.isNotNull(list, "found no list at all");
      const items = list.querySelectorAll("li");
      assert.equal(items.length, 3, "should find 3 list items");
    });

  });


});
