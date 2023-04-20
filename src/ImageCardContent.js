import React from "react";
import natureImage from "./nature-image.jpg"
import ImageCardRender from "./ImageCardRender";



function ImageCardContent() {
  return (
    <ImageCardRender title="Waterfall in deep forest" image={natureImage} comment="It’s no coincidence that every depiction of paradise seems to include a waterfall… "/>
  )
}

export default ImageCardContent;