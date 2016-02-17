import assert from "proclaim";

import dom from "./dom";
import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";

import App from "../../src/components/App";

describe("App", () => {

  describe("rendering", () => {

    before(function() {
      this.renderedContainer = TestUtils.renderIntoDocument(
        <App />
      );
    });

    it("should render the app statics", function () {
      const container = ReactDOM.findDOMNode(this.renderedContainer);
      assert.isNotNull(container, "did not find container");
      const heading = container.querySelector("h1");
      assert.isNotNull(heading, "did not find heading");
      const nav = container.querySelector("ul.nav");
      assert.isNotNull(nav, "did not find navigation");
      const navItems = container.querySelectorAll("ul.nav > li");
      assert.equal(navItems.length, 3, "wrong number of navigation items");
    });

  });

});
