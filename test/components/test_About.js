import assert from "proclaim";

import dom from "./dom";
import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";

import About from "../../src/components/About";

describe("About", () => {

  describe("rendering", () => {

    before(function() {
      this.renderedContainer = TestUtils.renderIntoDocument(
        <About />
      );
    });

    it("should render the about component", function () {
      const container = ReactDOM.findDOMNode(this.renderedContainer);
      assert.isNotNull(container, "did not find container");
      const heading = container.querySelector("h2");
      assert.isNotNull(heading, "did not find heading");
      const paragraphs = container.querySelectorAll("p");
      assert.greaterThan(paragraphs.length, 0, "found no paragraphs");
    });

  });

});
