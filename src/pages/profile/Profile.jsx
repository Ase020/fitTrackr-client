import { profile, userPic } from "../../assets";
import "./profile.css";

const Profile = () => {
  return (
    <div className="user_profile_container">
      <div className="user_profile_section_1" />
      <div className="user_profile_section_2" />

      <div className="user_profile_form_section">
        <div className="user_profile_form-container profile_form">
          <h3 className="user_profile-header">Fill in your bio</h3>

          <form className="user_profile_form-wrapper">
            <div className="form_wrapper user_profile-image_wrapper">
              <label className="form_label user_profile-image-label">
                <img src={userPic} alt="user-pic" className="form_label-img" />
              </label>
              <input type="file" required className="form_input-file" />
            </div>

            <div className="form_wrapper">
              <label className="form_label-input">Username</label>
              <input
                required
                type="text"
                className="form_input"
                placeholder="f.olali"
              />
            </div>

            <div className="form_wrapper">
              <label className="form_label-input">Gender</label>
              <select className="form_select form_input">
                <option value="1" className="form_options">
                  Male
                </option>
                <option value="1" className="form_options">
                  Female
                </option>
              </select>
            </div>

            <div className="form_wrapper">
              <label className="form_label-input">Date of birth</label>

              <input
                required
                type="date"
                className="form_input form_input-date"
              />
            </div>

            <div className="form_wrapper">
              <label className="form_label-input">Weight(kgs)</label>

              <input
                required
                type="number"
                placeholder="62"
                className="form_input"
              />
            </div>

            <div className="form_wrapper">
              <label className="form_label-input">Height(cm)</label>

              <input
                required
                type="number"
                placeholder="174"
                className="form_input"
              />
            </div>

            <button type="submit" className="form_submit-btn">
              Save
            </button>
          </form>
        </div>

        <div className="user_profile_form-container">
          <img src={profile} alt="profile" className="user_profile_img" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
