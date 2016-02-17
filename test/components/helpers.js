const createPost = (username, text) => {
  return {
    "username": username
    , "ts": +new Date
    , "text": text
    , "img": {
        "large": "img/large"
        , "small": "img/small"
        , "thumb": "img/thumb"
      }
    };
};

// depth first recursive
const findElement = (context, tagName) => {
  if (!(context.props && Array.isArray(context.props.children))) { return null; }
  return context.props.children.find(child => {
    if (!child.type) { return false; }
    if (tagName == child.type) { return true; }
    return findElement(child, tagName);
  }) || null;
};

export {
  createPost
  , findElement
};
