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

  const userObj = {
    email,
    username,
    password,
    password_confirmation: passwordConfirmation,
    profile_image: profile,
    gender,
    dob,
    weight,
    height,
  };

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userObj),
    })
      .then((res) => res.json())
      .then(onLogin);

    navigate("/login");
  }

  return (
    <>
      {showPage === "signup1" ? (
        <Signup1
          // onLogin={onLogin}
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
