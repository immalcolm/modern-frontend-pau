
//using imageurls from src/ folder 
//using require
function BorderedImageFrame(props) {
  return (
    <img
      src={props.imageURL}
      alt={props.alt}
      style={{
        border: "2px solid red",
        width: "400px",
      }}
    />
  );
}

export default BorderedImageFrame;
