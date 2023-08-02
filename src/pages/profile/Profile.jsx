// <<<<<<< profile-page
import React, { useState } from 'react';
import './profile.css';

// function App() {
  const [username, setUsername] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [isSaved, setIsSaved] = useState(false);
// =======
// import { useState } from 'react';
// import './profile.css';

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
// >>>>>>> main

//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   };

//   const handleGenderChange = (e) => {
//     setGender(e.target.value);
//   };

//   const handleDateOfBirthChange = (e) => {
//     setDateOfBirth(e.target.value);
//   };

//   const handleWeightChange = (e) => {
//     setWeight(e.target.value);
//   };

//   const handleHeightChange = (e) => {
//     setHeight(e.target.value);
//   };

//   const handleSave = () => {
//     const newData = {
//       username,
//       gender,
//       dateOfBirth,
//       weight,
//       height,
//     };

//     // Save the new data to your backend or perform any other actions as needed
//     console.log('Data saved:', newData);

//     // Clear the form fields after saving
//     setUsername('');
//     setGender('');
//     setDateOfBirth('');
//     setWeight('');
//     setHeight('');

//     // Set isSaved to true to trigger page reload
//     setIsSaved(true);
//   };

//   // Reload the page when data is saved (isSaved is true)
//   if (isSaved) {
//     setIsSaved(false);
//     window.location.reload();
//   }

//   return (
//     <div className="App">
//       <h1>Fitness App</h1>
//       <div>
//         <label>Username:</label>
//         <input type="text" value={username} onChange={handleUsernameChange} />
//       </div>
//       <div>
//         <label>Gender:</label>
//         <select value={gender} onChange={handleGenderChange}>
//           <option value="">Select Gender</option>
//           <option value="Male">Male</option>
//           <option value="Female">Female</option>
//           <option value="Other">Other</option>
//         </select>
//       </div>
//       <div>
//         <label>Date of Birth:</label>
//         <input type="date" value={dateOfBirth} onChange={handleDateOfBirthChange} />
//       </div>
//       <div>
//         <label>Weight (kg):</label>
//         <input type="number" value={weight} onChange={handleWeightChange} />
//       </div>
//       <div>
//         <label>Height (cm):</label>
//         <input type="number" value={height} onChange={handleHeightChange} />
//       </div>
//       <button onClick={handleSave}>Save</button>

//       {isSaved && (
//         <div className="user-card">
//           <h2>User Information</h2>
//           <p>
//             <strong>Username:</strong> {username}
//           </p>
//           <p>
//             <strong>Gender:</strong> {gender}
//           </p>
//           <p>
//             <strong>Date of Birth:</strong> {dateOfBirth}
//           </p>
//           <p>
//             <strong>Weight:</strong> {weight} kg
//           </p>
//           <p>
//             <strong>Height:</strong> {height} cm
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
export default Profile;