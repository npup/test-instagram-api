import { E, T } from "./util";

export default {
  render() {
    const frag = document.createDocumentFragment();
    T({"element": frag}, [
      E("h2", {"class": "main", "html": "Om"})
      , E("p", {"html": [
            "Man kan här se en del bilder taggade på <a href=\"//instagram.com\">Instagram</a>."
            , "För att anropen skall lyckas krävs en <code>access token</code> som fås genom"
            , "att (om det behövs) <em>en gång</em> göra en inloggning"
            , "i <a href=\"//instagram.com\">Instagram</a>, varefter man kommer tillbaka hit"
            , "och kan välja tagg obehindrat."
          ].join("")})
       , E("p", {"html": "-- lorem ipsum"})
      ]);
    return {"element": frag};
  }
};
