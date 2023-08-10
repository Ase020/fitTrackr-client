/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Profile, Signup1 } from "../../components";

const Signup = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [profile, setProfile] = useState(null);
  const [gender, setGender] = useState("Male");
  const [dob, setDob] = useState("2000-01-01");
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [showPage, setShowPage] = useState("signup1");

  const navigate = useNavigate();

  const formData = new FormData();
  formData.append("username", username);
  formData.append("email", email);
  formData.append("password", password);
  formData.append("password_confirmation", passwordConfirmation);
  formData.append("profile_image", profile);
  formData.append("gender", gender);
  formData.append("dob", dob);
  formData.append("weight", weight);
  formData.append("height", height);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://fittrackr-8zow.onrender.com/signup", {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Invalid credentials");
        }
        return res.json();
      })
      .then((user) => {
        onLogin(user);
        navigate("/exercises");
      })
      .catch((error) => {
        console.error("Signup failed:", error);
      });
  }

  return (
    <>
      {showPage === "signup1" ? (
        <Signup1
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          passwordConfirmation={passwordConfirmation}
          setPasswordConfirmation={setPasswordConfirmation}
          setShowPage={setShowPage}
        />
      ) : (
        <Profile
          username={username}
          setUsername={setUsername}
          profile={profile}
          setProfile={setProfile}
          gender={gender}
          setGender={setGender}
          dob={dob}
          setDob={setDob}
          weight={weight}
          setWeight={setWeight}
          height={height}
          setHeight={setHeight}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
};

export default Signup;
