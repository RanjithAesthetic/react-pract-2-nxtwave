const Box = (props) => {
  //  Write your code here.
  const { boxCls, boxText } = props;
  return (
    <div className={boxCls}>
      <p className="box-text">{boxText}</p>
    </div>
  );
};

const element = (
  <div className="main-container">
    <h1>Boxes</h1>
    <div className="box-container">
      <Box boxCls="box-small" boxText="Small"></Box>
      <Box boxCls="box-medium" boxText="Medium"></Box>
      <Box boxCls="box-large" boxText="Large"></Box>
    </div>
  </div>
);
//  Write your code here.

ReactDOM.render(element, document.getElementById("root"));
