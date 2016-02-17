// transforms an Instgram api response entry -> app post entry
export default entry => {
  try {
    // only images for now
    if ("image" != entry.type) { return null; }
    const result = {
        "username": entry.caption.from.username
        , "ts": entry.caption.created_time*1000
        , "text": entry.caption.text
        , "img": {
          "large": entry.images.standard_resolution.url
          , "small": entry.images.low_resolution.url
          , "thumb": entry.images.thumbnail.url
        }
    };
    return result;
  }
  catch(err) {
    throw new Error("Misconfigured entry object supplied: "+err.message);
  }
};

