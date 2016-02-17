import assert from "proclaim";
import massage from "../../src/util/massage";

describe("massage", () => {

  it("should be defined as a function", () => {
    assert.isFunction(massage);
  });

  it("should take 1 parameter: an object with post data", () => {
    assert.equal(massage.length, 1);
  });

  it("should return null for a post data object that does not have type: \"image\"", () => {
    assert.isNull(massage({}));
    assert.isNull(massage({"type": "video"}));
    assert.isNull(massage({"type": "foo"}));
    assert.isNull(massage({"type": null}));
  });

  it("should throw an error for a post data object with type: \"image\" but otherwise misconfigured", () => {
    assert.throws(() => {
      massage({"type": "image"});
    }, /^Misconfigured entry object supplied: \S+/);
  });


  it("should convert a post data object to a structure useable in this application", () => {
    const now = +new Date
      , obj = massage({
        "type": "image"
        , "caption": {
            "from": { "username": "Foo" }
            , "created_time": now/1000
            , "text": "It's a foo"
          }
        , "images": {
            "standard_resolution": { "url": "//some-url/large" }
            , "low_resolution": { "url": "//some-url/small" }
            , "thumbnail": { "url": "//some-url/thumb" }
          }
      });
    assert.isNotNull(obj);
    assert.isObject(obj);
    assert.equal(obj.username, "Foo");
    assert.equal(obj.ts, now);
    assert.equal(obj.text, "It's a foo");
    assert.equal(obj.img.large, "//some-url/large");
    assert.equal(obj.img.small, "//some-url/small");
    assert.equal(obj.img.thumb, "//some-url/thumb");
  });

});
