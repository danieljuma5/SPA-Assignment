import React from "react";


function ImageCardRender(prop) {
  return (
    <div id="forest-div">
      <span>{prop.title}</span>
      <img  src={prop.image} alt="nature is beautiful" />
      <p>{prop.comment}</p>
    </div>
  )
}

export default ImageCardRender;