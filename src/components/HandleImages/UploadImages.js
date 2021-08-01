import React, { useRef, useState } from "react";
import { Button, Header, Image } from "semantic-ui-react";

export default function UploadImages() {
  const inputRef = useRef();
  const [image, setImage] = useState(
    "https://react.semantic-ui.com/images/wireframe/image.png"
  );
  function handleInputChange(params) {}

  return (
    <>
      <Header as="h4">If need upload your image</Header>
      <Image size="large" src={image} />
      <input
        ref={inputRef}
        type="file"
        onChange={handleInputChange}
        className="hide"
      />
      <Button onClick={() => inputRef.current.click()} className="mt-1">
        Upload Image
      </Button>
    </>
  );
}
