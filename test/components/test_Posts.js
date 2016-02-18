import assert from "proclaim";

import Posts from "../../src/components/Posts";

describe("Posts", () => {

  it("should be defined as a function", function () {
    assert.isFunction(Posts);
  });

  it("should accept 1 parameter", () => {
    assert.equal(Posts.length, 1);
  });

  describe("invocation result", () => {

    before(function () {
      this.posts = Posts("foo");
    });

    it("should be a non-null object", function () {
      assert.isNotNull(this.posts);
      assert.isObject(this.posts);
    });

    it("should have a `setLoader` method", function () {
      assert.isFunction(this.posts.setLoader);
    });

    describe("`setLoader` method", () => {

      it("should return the posts instance", () => {
        const posts = Posts("foo");
        assert.equal(posts.setLoader(null), posts);
      });

    });

    describe("`render` method", () => {

      before(function () {
        this.result = Posts("foo").render(false);
      });

      it("it should return a non-null object", function () {
        assert.isObject(this.result);
        assert.isNotNull(this.result);
      });

      it("it should, in fact, return a DocumentFragment", function () {
        assert.isInstanceOf(this.result.element, DocumentFragment);
      });


      describe("rendering, no posts", function () {

        before(function () {
          const container = document.createElement("div");
          this.tagName = "foo";
          const posts = Posts(this.tagName);
          // render(false) => no load hook executes
          const renderedPosts = posts.render(false);
          container.appendChild(renderedPosts.element);
          this.container = container;
        });

        it("should render the ui", function () {
          assert.greaterThan(this.container.innerHTML.length, 0);
        });

        it("should render a heading with a link to the Instagram page for the tag name", function () {
          const heading = this.container.querySelector("h4");
          assert.isNotNull(heading, "did not find heading");
          const link = heading.querySelector("a");
          assert.isNotNull(link, "did not find link");
          assert.equal(link.getAttribute("href"), "https://www.instagram.com/explore/tags/"+this.tagName+"/");
        });

        it("should render a list container for posts", function () {
          const list = this.container.querySelector("ul");
          assert.isNotNull(list, "found no list at all");
        });

        it("list should be empty", function () {
          const items = this.container.querySelector("ul").querySelectorAll("li");
          assert.lengthEquals(items, 0, "should find 0 list items");
        });

      });


      describe("rendering, with posts", function () {

        before(function () {
          const container = document.createElement("div");
          this.tagName = "bar";
          const posts = Posts(this.tagName)
            , author = "Foo"
            , text = "It's foo"
            , ts = +new Date
            , thumb = "/src/thumb"
            , img = {thumb}
            , postData = {author, text, ts, img};
          posts.setLoader(function (tagName, callback) {
            // supply three posts data posts
            callback([1,2,3].map(()=>postData));
          });
          const renderedPosts = posts.render();
          container.appendChild(renderedPosts.element);
          this.container = container;
        });

        it("list should not be empty", function () {
          const items = this.container.querySelector("ul").querySelectorAll("li");
          assert.lengthEquals(items, 3, "should find 3 list items");
        });

      });


    });



  });





});
