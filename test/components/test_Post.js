import React from "react";
import TestUtils from "react-addons-test-utils";
import assert from "proclaim";

import Post from "../../src/components/Post";
import { createPost, findElement } from "./helpers";

describe("Post", () => {

  describe("rendering", () => {

    before(function() {
      const post = createPost("Foo", "It's foo")
        , renderer = TestUtils.createRenderer();
      renderer.render(<Post key={42} data={post} />);
      this.now = post.ts;
      this.thumbSrc = post.img.thumb;
      this.text = post.text;
      this.rendered = renderer.getRenderOutput();
    });

    it("should render a link to the author's Instagram page", function () {
      const childElements = this.rendered.props.children
        , userLink = findElement(this.rendered, "a");
      assert.isNotNull(userLink);
      assert.equal(userLink.props.href, "https://instagram.com/Foo");
    });

    it("should render an element with the timestamp", function () {
      const childElements = this.rendered.props.children;
      var tsElem = childElements.find(elem => {
        if (!elem.props) { return false; }
        if ("number" != typeof elem.props["data-ts"]) { return false; }
        return true;
      });
      assert.isNotNull(tsElem);
      assert.equal(tsElem.props["data-ts"], this.now);
    });

    it("should render an image with the thumb src", function () {
      const childElements = this.rendered.props.children;
      var imgElem = findElement(this.rendered, "img");
      assert.isNotNull(imgElem);
      assert.equal(imgElem.props.src, this.thumbSrc);
    });

    it("should render a paragraph with just the post's text", function () {
      const childElements = this.rendered.props.children;
      var paragraph = findElement(this.rendered, "p");
      assert.isNotNull(paragraph);
      assert.isString(paragraph.props.children, "should only have text content");
      assert.match(paragraph.props.children, new RegExp(this.text), "should contain the post text");
    });

  });


});
