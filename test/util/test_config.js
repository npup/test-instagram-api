import assert from "proclaim";
import config from "../../src/config";

describe("config", () => {

  describe("clientId", () => {
    it("should be defined as a string", () => {
      assert.isString(config.clientId);
    });
    it("should not be blank", () => {
      assert.match(config.clientId, /\S+/);
    });
  });

  describe("callback", () => {
    it("should be defined as a string", () => {
      assert.isString(config.callback);
    });
    it("should not be blank", () => {
      assert.match(config.callback, /\S+/);
    });
    it("should be an http(s) address", () => {
      assert.match(config.callback, /^https?:\/\/\S+\.\S{2,}/);
    });
  });

});
