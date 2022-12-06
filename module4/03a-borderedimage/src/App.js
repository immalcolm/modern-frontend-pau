import BorderedImageFrame from "./BorderedImageFrame";
import BorderedImageFrame2 from "./BorderedImageFrame2";
import React from 'react';

//example of 2 ways of using images
//borderedimageframe2 taps on images in the public folder/
function App() {
  return (
    <React.Fragment>
      <BorderedImageFrame imageURL={require("./cat.jpg")} alt="Lovely Cat" />
      <BorderedImageFrame2 imageURL="dog.jpg" alt="Lovely Dog" />
    </React.Fragment>
  );
}

export default App;
