import { useState } from 'react';
import './profile.css';

const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  return (
    <div className="profile-wrapper">
      <div className="profile-container">
        <img
          className="profile-pic"
          src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg"
        />
        <div className="profile-info">
          <div className="one-info">
            <p>Username</p>
            <input
              className="input"
              placeholder="milhan"
              disabled={!editMode}
            />
          </div>
          <div className="one-info">
            <p>Gender</p>
            <input
              className="input"
              placeholder="female"
              disabled={!editMode}
            />
          </div>
          <div className="one-info">
            <p>Date Of Birth</p>
            <input
              className="input"
              placeholder="28/7/2003"
              disabled={!editMode}
            />
          </div>
          <div className="one-info">
            <p>Weight (kgs)</p>
            <input className="input" placeholder="75" disabled={!editMode} />
          </div>
          <div className="one-info">
            <p>Height (cms)</p>
            <input className="input" placeholder="178" disabled={!editMode} />
          </div>
          <button onClick={() => setEditMode(!editMode)}>
            {editMode ? 'Save' : 'Edit'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
