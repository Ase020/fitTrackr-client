/* eslint-disable react/prop-types */
import { profilePic, userPic } from "../../assets";
import "./profile.css";

const Profile = ({
  username,
  setUsername,
  setProfile,
  gender,
  setGender,
  dob,
  setDob,
  weight,
  setWeight,
  height,
  setHeight,
  handleSubmit = { handleSubmit },
  isLoading,
}) => {
  const handleChange = (e) => {
    e.persist();
    setProfile(e.target.files[0]);
  };

  return (
    <div className="user_profile_container">
      <div className="user_profile_section_1" />
      <div className="user_profile_section_2" />

      <div className="user_profile_form_section">
        <div className="user_profile_form-container profile_form">
          <h3 className="user_profile-header">Fill in your bio</h3>

          <form className="user_profile_form-wrapper" onSubmit={handleSubmit}>
            <div className="form_wrapper user_profile-image_wrapper">
              <label className="form_label user_profile-image-label">
                <img src={userPic} alt="user-pic" className="form_label-img" />
              </label>
              <input
                type="file"
                required
                className="form_input-file"
                onChange={handleChange}
              />
            </div>

            <div className="form_wrapper">
              <label className="form_label-input">Username</label>
              <input
                required
                type="text"
                className="form_input"
                placeholder="f.olali"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="form_wrapper">
              <label className="form_label-input">Gender</label>
              <select
                className="form_select form_input"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="Male" className="form_options">
                  Male
                </option>
                <option value="Female" className="form_options">
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
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </div>

            <div className="form_wrapper">
              <label className="form_label-input">Weight(kgs)</label>

              <input
                required
                type="number"
                placeholder="62"
                className="form_input"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>

            <div className="form_wrapper">
              <label className="form_label-input">Height(cm)</label>

              <input
                required
                type="number"
                placeholder="174"
                className="form_input"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>

            <button type="submit" className="form_submit-btn">
              {isLoading ? "Saving..." : "Save"}
            </button>
          </form>
        </div>

        <div className="user_profile_form-container">
          <img src={profilePic} alt="profile" className="user_profile_img" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
