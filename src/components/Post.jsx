import React from "react";

const fmtDate = ts => {
  return (new Date(ts)).toISOString().replace(/T|\:\d{2}\.\d{3}Z/g, " ").trim();
};

export default React.createClass({
  "propTypes": {
      "data": React.PropTypes.object
    }
  , render() {
      return (
        <li>
          <a className="author" href={"https://instagram.com/"+this.props.data.username}>@{this.props.data.username}</a>
          , <span className="ts" data-ts={this.props.data.ts}>{fmtDate(this.props.data.ts)}</span>
          <img src={this.props.data.img.thumb} />
          <p className="caption">{this.props.data.text}</p>
        </li>
      );
    }
});
