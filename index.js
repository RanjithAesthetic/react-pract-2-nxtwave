const Box = (props) => {
  //  Write your code here.
  const { className, text } = props;
  return (
    <div className={className}>
      <p className="box-text">{text}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div>
    <h1 className="heading">Boxes</h1>
    <div className="boxContainer">
      <Box className="box box1" text="Small"></Box>
      <Box className="box box2" text="Medium"></Box>
      <Box className="box box3" text="Large"></Box>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
