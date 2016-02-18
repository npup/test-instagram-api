// Build DOM node
function E(tag, props) {
  const elem = document.createElement(tag);
  for (let key in props) {
    const value = props[key];
    if ("html" == key) { elem.innerHTML = value; }
    else { elem.setAttribute(key, value); }
  }
  return {"element": elem};
}

// Build node tree
function T(node, children=[]) {
  var elem = node.element;
  children.forEach(childNode => {
    if (false===childNode || null==childNode) { return; }
    else if ("string"==typeof childNode) { elem.appendChild(E("span", {"html": childNode}).element); }
    else { elem.appendChild(T(childNode).element); }
  });
  return {"element": elem};
}

export {
  E, T
};
