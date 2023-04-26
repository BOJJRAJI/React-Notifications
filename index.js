const Notification = (props) => {
  const { className, text, imageUrl } = props;

  return (
    <div className={className}>
      <img src={imageUrl} className="icon" />
      <p className="para">{text}</p>
    </div>
  );
};

const element = (
  <div class="bg-container">
    <h1 className="heading">Notifications</h1>
    <Notification
      className="info-card"
      text="Information Message"
      imageUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
    />
    <Notification
      className="success-card"
      text="Success Message"
      imageUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
    />
    <Notification
      className="warning-card"
      text="Warning Message"
      imageUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
    />
    <Notification
      className="error-card"
      text="Error Message"
      imageUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
