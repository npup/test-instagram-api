import assert from "proclaim";

import App from "../../src/components/App";

describe("App", () => {

  it("should be defined as an object", function () {
    assert.isObject(App);
  });

  it("should have a `render` method", function () {
    assert.isFunction(App.render);
  });

  describe("render", () => {

    before(function () {
      const appRoot = document.createElement("div");
      App.setDOMRoot(appRoot);
      this.appRoot = appRoot;
      this.app = App.render(false); // `false` makes for shallow render;
    });

    it("should accept 0 parameters", () => {
      assert.equal(App.render.length, 0);
    });

    it("should return an object with an `element` property that is a DocumentFragment", function () {
      assert.isNotNull(this.app);
      const elem = this.app.element;
      assert.isInstanceOf(elem, DocumentFragment);
    });

    it("should render the App component", function () {
      const container = document.createElement("div");
      container.appendChild(this.app.element);
      const heading = container.querySelector("h1");
      assert.isNotNull(heading, "did not find heading");
      const nav = container.querySelector("ul.nav");
      assert.isNotNull(nav, "did not find navigation");
      const navItems = container.querySelectorAll("ul.nav > li");
      assert.equal(navItems.length, 3, "wrong number of navigation items");
    });

  });

});
