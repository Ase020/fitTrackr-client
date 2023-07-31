import "./password-reset.css";
import { resetImage } from "../../assets";

const PasswordReset = () => {
  return (
    <div className="reset-container">
      <div className="reset-wrapper">
        <div className="image-container">
          <img
            src={resetImage}
            alt="reset-image"
            className="reset-image-container-image"
          />
        </div>

        <div className="form-container">
          <h2>Password reset</h2>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="jdoe123@example.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">New password</label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                placeholder="Enter new password"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmNewPassword">Confirm new password</label>
              <input
                type="password"
                id="confirmNewPassword"
                name="confirmNewPassword"
                placeholder="Confirm new password"
                required
              />
            </div>
            <button className="password_reset-btn" type="submit">
              Reset
            </button>
          </form>
          <div id="or">or</div>
          <p>
            Already have an account?{" "}
            <a className="login" href="/login">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
