import excamation from '../../assets/excamation.svg';
import check from '../../assets/check.svg';
import './membership.css';

const Membership = () => {
  return (
    <div className="wrapper">
      <div className="info">
        <p className="par1">GET STRONGER WITH FITTRACKR</p>
        <p className="par2">Choose a plan</p>
        <p className="par2">thats right for you</p>
      </div>
      <div className="top">
        <p className="main-title"> MAIN FEATURES</p>
        <div className="col">
          <h6 className="first_tittle">Free trial</h6>
          <p className="p_text">14 days of free trial</p>
          <p className="sub_p">
            <sup className="dollar">$</sup>0
          </p>
          <p className="p_month">Per month</p>
        </div>
        <div className="col special">
          <h6 className="second_tittle">Premium</h6>
          <p className="p_text">Fit with everyone</p>
          <p className="sub_p">
            <sup className="dollar">$</sup>20.88
          </p>
          <p className="p_month">Per month</p>
        </div>
        <div className="col">
          <h6 className="third_tittle">Unlimited Access</h6>
          <p className="p_text">Are you pro? Lets do it</p>
        </div>
      </div>
      <div className="mem-info">
        <p className="tittle">Time-Trackers</p>
        <img className="excamation" src={excamation} />
        <img className="check" src={check} />
        <img className="check special" src={check} />
        <img className="check" src={check} />
      </div>
      <div className="mem-info">
        <p className="tittle">Exclusive Music</p>
        <img className="excamation" src={excamation} />
        <img className="check" src={check} />
        <img className="check special" src={check} />
        <img className="check" src={check} />
      </div>
      <div className="mem-info">
        <p className="tittle">E-books</p>
        <img className="excamation" src={excamation} />
        <img className="check" src={check} />
        <img className="check special" src={check} />
        <img className="check" src={check} />
      </div>
      <div className="mem-info">
        <p className="tittle">Documents</p>
        <img className="excamation" src={excamation} />
        <div className="icon">
          <div className="dash" />
        </div>
        <img className="check special" src={check} />
        <img className="check" src={check} />
      </div>
      <div className="mem-info">
        <p className="tittle">Premium Tutorial</p>
        <img className="excamation" src={excamation} />
        <img className="check" src={check} />
        <img className="check special" src={check} />
        <img className="check" src={check} />
      </div>
      <div className="mem-info">
        <p className="tittle">Client Support</p>
        <img className="excamation" src={excamation} />
        <img className="check" src={check} />
        <img className="check special" src={check} />
        <img className="check" src={check} />
      </div>
      <div className="mem-info">
        <p className="tittle">Premium Courses</p>
        <img className="excamation" src={excamation} />
        <div className="icon">
          <div className="dash" />
        </div>
        <img className="check special" src={check} />
        <img className="check" src={check} />
      </div>
      <div className="mem-info">
        <p className="tittle">User support</p>
        <img className="excamation" src={excamation} />
        <div className="icon">
          <div className="dash" />
        </div>
        <img className="check special" src={check} />
        <img className="check" src={check} />
      </div>
      <div className="mem-info">
        <p className="tittle">Chat to trainers</p>
        <img className="excamation" src={excamation} />
        <div className="icon">
          <div className="dash" />
        </div>
        <div className="icon special">
          <div className="dash" />
        </div>
        <img className="check" src={check} />
      </div>
      <div className="mem-info">
        <p className="tittle">Unlimited Videos</p>
        <img className="excamation" src={excamation} />
        <div className="icon">
          <div className="dash" />
        </div>
        <div className="icon special">
          <div className="dash" />
        </div>
        <img className="check" src={check} />
      </div>

      <div className="top2">
        <div className="main-title" />
        <div className="col">
          <button className="btn1">Start free trial</button>
        </div>
        <div className="col special">
          <button className="btn1">Get Started</button>
        </div>
        <div className="col">
          <button className="btn2">Contact Sale</button>
        </div>
      </div>
    </div>
  );
};

export default Membership;
