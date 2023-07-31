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

        <div className="form-re-container">
          <h2>Password reset</h2>
          <form>
            <div className="form-re-group">
              <label htmlFor="email">Email Address</label>
              <input
                className="that-input"
                type="email"
                id="email"
                name="email"
                placeholder="jondoe123@example.com"
                required
              />
            </div>
            <div className="form-re-group">
              <label htmlFor="password">New password</label>
              <input
                className="that-input"
                type="password"
                id="newPassword"
                name="newPassword"
                placeholder="Enter new password"
                required
              />
            </div>
            <div className="form-re-group">
              <label htmlFor="confirmNewPassword">Confirm new password</label>
              <input
                className="that-input"
                type="password"
                id="confirmNewPassword"
                name="confirmNewPassword"
                placeholder="Confirm new password"
                required
              />
            </div>
            <button className="reset-btn" type="submit">Reset</button>
          </form>
          <div className="or">or</div>
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