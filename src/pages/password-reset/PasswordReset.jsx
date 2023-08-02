import "./password-reset.css";
import { resetImage } from "../../assets";
import { useState } from "react";
import { Link } from "react-router-dom";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmNewPassword) {
      alert("Passwords do not match");
      return;
    }

    // data to be sent to the fitTrackr API.
    const data = {
      email: email,
      newPassword: newPassword,
      confirmNewPassword: confirmNewPassword,
    };

    fetch("http://127.0.0.1:3000/password_reset", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          alert("Password reset successful");
        } else {
          alert("Password reset unsuccessful");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
          <form onSubmit={handleFormSubmit}>
            <div className="form-re-group">
              <label htmlFor="email">Email Address</label>
              <input
                className="that-input"
                type="email"
                id="email"
                name="email"
                placeholder="jondoe123@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
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
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
              />
            </div>
            <button className="reset-btn" type="submit">
              Reset
            </button>
          </form>
          <div className="or">or</div>
          <p className="have-account">
            Already have an account?{" "}
            <Link to="/login" className="login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;