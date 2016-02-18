import assert from "proclaim";
import jsdom from "jsdom-global";
jsdom();

import { checkTagName, storeTagName, removeTagName } from "../../src/util/storage";

describe("storage", () => {

  describe("storeTagName", () => {

    afterEach(removeTagName);

    it("should be defined as a function", () => {
      assert.isFunction(storeTagName);
    });

    it("should return a string", () => {
      var tmp = storeTagName("foo");
      assert.isString(tmp);
    });

    it("should store a tagName", () => {
      storeTagName("bar");
      assert.equal(checkTagName(), "bar");
    });

  });

  describe("removeTagName", () => {

    it("should be defined as a function", () => {
      assert.isFunction(removeTagName);
    });

    it("should remove a set value so that retrieving it returns undefined", () => {
      assert.isUndefined(checkTagName());
      storeTagName("bar");
      assert.equal(checkTagName(), "bar");
      removeTagName();
      assert.isUndefined(checkTagName());
    });

  });


  describe("checkTagName", () => {

    afterEach(removeTagName);

    it("should be defined as a function", () => {
      assert.isFunction(checkTagName);
    });

    it("should return a string if tagName is stored, otherwise undefined", () => {
      var tmp = checkTagName();
      assert.isUndefined(tmp);

      storeTagName("foo");
      tmp = checkTagName();
      assert.isString(tmp);
      assert.equal(checkTagName(), "foo");
    });

  });

});
