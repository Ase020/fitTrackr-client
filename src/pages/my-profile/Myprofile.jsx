import { useContext, useState } from "react";
import "./myprofile.css";
import { UserContext } from "../../context/user";

const Myprofile = () => {
  const [user] = useContext(UserContext);
  const [editMode, setEditMode] = useState(false);

  console.log(user);
  return (
    <div className="profile-wrapper">
      <div className="profile-container">
        <img
          className="profile-pic"
          src={user?.profile_image}
          alt={user?.username}
        />
        <div className="profile-info">
          <div className="one-info">
            <p>Username</p>
            <input
              className="input"
              placeholder={user?.username}
              disabled={!editMode}
            />
          </div>
          <div className="one-info">
            <p>Gender</p>
            <input
              className="input"
              placeholder={user?.gender}
              disabled={!editMode}
            />
          </div>
          <div className="one-info">
            <p>Date Of Birth</p>
            <input
              className="input"
              placeholder={user?.dob}
              disabled={!editMode}
            />
          </div>
          <div className="one-info">
            <p>Weight (kgs)</p>
            <input
              className="input"
              placeholder={user?.weight}
              disabled={!editMode}
            />
          </div>
          <div className="one-info">
            <p>Height (cms)</p>
            <input
              className="input"
              placeholder={user?.height}
              disabled={!editMode}
            />
          </div>
          <button onClick={() => setEditMode(!editMode)} className="login-btn">
            {editMode ? "Save" : "Edit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Myprofile;
