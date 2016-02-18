import assert from "proclaim";
import { checkToken, requestToken } from "../../src/util/auth";

import jsdom from "jsdom-global";
jsdom();


describe("auth", () => {

  describe("requestToken", () => {

    it("should be defined as a function", () => {
      assert.isFunction(requestToken);
    });

    it("should return a string", () => {
      var tmp = requestToken({});
      assert.isString(tmp);
    });

    it("should return a an Instagram API endpoint configured with clientId and callback", () => {
      var expected = "https://www.instagram.com/oauth/authorize/?client_id=FOO&redirect_uri=BAR&response_type=token&scope=public_content";
      assert.equal(requestToken({"clientId": "FOO", "callback": "BAR"}), expected);
    });

  });

  describe("checkToken", () => {

    it("should be defined as a function", () => {
      assert.isFunction(checkToken);
    });

    it("should return the access token if present in the hash, else undefined", () => {
      location.hash = "";
      assert.isUndefined(checkToken(), "value when no hash at all");

      location.hash = "#foo=bar";
      assert.isUndefined(checkToken(), "value when no access_token hash value");

      location.hash = "#access_token=";
      assert.isUndefined(checkToken(), "value when no value for access_token in hash");

      location.hash = "#access_token=foo";
      assert.isString(checkToken(), "value from access_token in hash should be a string");
      assert.equal(checkToken(), "foo", "value from access_token in hash should be \"foo\"");
    });

  });

});
