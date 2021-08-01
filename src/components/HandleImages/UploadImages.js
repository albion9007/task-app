import React, { useState } from "react";
import { Button, Image } from "semantic-ui-react";

export default function UploadImages() {
  const [image, setImage] = useState(
    "https://react.semantic-ui.com/images/wireframe/image.png"
  );
  function handleInputChange(params) {}

  return (
    <>
      <Image size="large" src={image} />;
      <input type="file" onChange={handleInputChange} />
      <Button>Upload Image</Button>
    </>
  );
}
