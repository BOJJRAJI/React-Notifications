const Notification = (props) => {
  const { className, text, imgUrl } = props;

  return (
    <div className={className}>
      <img src={imgUrl} className="image" />
      <p className="paragraph">{text}</p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <Notification
      className="info"
      text="Information Message"
      imgUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
    />
    <Notification
      className="success"
      text="Success Message"
      imgUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
    />
    <Notification
      className="warning"
      text="Warning Message"
      imgUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
    />
    <Notification
      className="error"
      text="Error Message"
      imgUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
