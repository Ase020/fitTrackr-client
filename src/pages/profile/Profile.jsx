import { profile } from "../../assets";
import "./profile.css";

const Profile = () => {
  return (
    <div className="user_profile_container">
      <div className="user_profile_section_1" />
      <div className="user_profile_section_2" />

      <div className="user_profile_form_section">
        <div className="user_profile_form-container">Form</div>
        <div className="user_profile_form-container">
          <img src={profile} alt="profile" className="user_profile_img" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
