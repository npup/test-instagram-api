import React from "react";

export default React.createClass({
  render() {
      return (
        <div>
          <h2>Om</h2>
          <p>
            Man kan här se en del bilder taggade på <a href="//instagram.com">Instagram</a>.
            För att anropen skall lyckas krävs en <code>access token</code> som fås genom
            att (om det behövs) <em>en gång</em> göra en inloggning
            i <a href="//instagram.com">Instagram</a>, varefter man kommer tillbaka hit
            och kan välja tagg obehindrat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      );
    }
});
