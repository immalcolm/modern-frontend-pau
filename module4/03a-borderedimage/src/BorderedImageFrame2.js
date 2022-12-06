//will use images in public/ folder instead
//export default together with function
export default function BorderedImageFrame2(props) {
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
