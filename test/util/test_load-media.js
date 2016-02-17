import assert from "proclaim";
import jsdom from "mocha-jsdom";
jsdom({"skipWindowCheck": true});

import mediaLoader from "../../src/util/load-media";


describe("load-media", () => {

  it("should be a function", () => {
    assert.isFunction(mediaLoader);
  });

  it("should take one parameter: the configuring api token", () => {
    assert.equal(mediaLoader.length, 1);
  });

  it("should return a configured loader function", () => {
    assert.isFunction(mediaLoader());
  });

  describe("configured loader", () => {
    let load;
    before(() => {
      load = mediaLoader();
    });

    it("should be a function", () => {
      assert.isFunction(load);
    });

    it("should take 2 parameters: a tag name and a callback", () => {
      assert.equal(load.length, 2);
    });

  });

});
