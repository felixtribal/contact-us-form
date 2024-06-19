import Tick from '../../public/assets/images/icon-success-check.svg';
import './styles.css'

export const Message = () => {
  return (
    <>
      <div className="messageContainer">
        <div className="messageHeader">
          <img src={Tick} alt="check success" />
          <span className="font-bold">Message Sent!</span>
        </div>
        <p className="mainMessage">
          Thanks for completing the form. We’ll be in touch soon!
        </p>
      </div>
    </>
  );
};
