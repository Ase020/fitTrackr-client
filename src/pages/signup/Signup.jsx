/* eslint-disable react/prop-types */
import { useState } from "react";

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

  return (
    <>
      <Signup1
        onLogin={onLogin}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        passwordConfirmation={passwordConfirmation}
        setPasswordConfirmation={setPasswordConfirmation}
      />
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
      />
    </>
  );
};

export default Signup;
