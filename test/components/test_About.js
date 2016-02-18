import assert from "proclaim";

import About from "../../src/components/About";

describe("About", () => {

  it("should be defined as an object", function () {
    assert.isObject(About);
  });

  it("should have a `render` method", function () {
    assert.isFunction(About.render);
  });

  describe("render", () => {

    before(function () {
      this.about = About.render();
    });

    it("should accept 0 parameters", () => {
      assert.equal(About.render.length, 0);
    });

    it("should return an object with an `element` property that is a DocumentFragment", function () {
      assert.isNotNull(this.about);
      const elem = this.about.element;
      assert.isInstanceOf(elem, DocumentFragment);
    });

    it("should render the About component", function () {
      const container = document.createElement("div");
      container.appendChild(this.about.element);
      const heading = container.querySelector("h2");
      assert.isNotNull(heading, "did not find heading");
      const paragraphs = container.querySelectorAll("p");
      assert.greaterThan(paragraphs.length, 0, "found no paragraphs");
    });

  });

});
