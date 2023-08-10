/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  ageCalculator,
  bMICalculator,
  bMIInterpreter,
  formatDate,
} from "../../utils";
import "./user-row.css";
import { avatar } from "../../assets";

const UserRow = ({ user }) => {
  const [checked, setChecked] = useState(user?.is_admin);
  const [isLoading, setIsLoading] = useState(false);

  const bmi = bMICalculator(user.height, user.weight);
  const healthStatus = bMIInterpreter(bmi);
  const age = ageCalculator(user.dob);
  const joinedDate = formatDate(user.created_at);

  const handleEdit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    fetch(`https://fittrackr-8zow.onrender.com/users/${user?.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ is_admin: checked }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Failed to update the user!");
        }
      })
      .then((data) => {
        alert(
          checked
            ? `${user.username} is now an admin!`
            : `${user.username} is no longer an admin!`
        );
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <tr>
      <td className="td_email" data-label="Email">
        <img
          src={user.profile_image || avatar}
          alt="user-profile"
          className="user_avatar"
        />
      </td>
      <td className="td_email" data-label="Email">
        {user.email}
      </td>
      <td className="td_username" data-label="Username">
        {user.username}
      </td>
      <td className="td_gender" data-label="Gender">
        {user.gender}
      </td>
      <td className="td_age" data-label="Age">
        {age}
      </td>
      <td className="td_bmi" data-label="BMI">
        {bmi}
      </td>
      <td className="td_health_status" data-label="BMI">
        {healthStatus}
      </td>
      <td className="td_admin" data-label="Admin?">
        <input
          type="checkbox"
          className="td_input-checkbox"
          checked={checked}
          onChange={() => setChecked((prev) => !prev)}
        />
      </td>
      <td className="td_date" data-label="Date Joined">
        {joinedDate}
      </td>
      <td className="td_save" data-label="Save">
        <button
          className="td_save-btn"
          onClick={handleEdit}
          disabled={checked === user?.is_admin || isLoading}
        >
          {isLoading ? "Updating..." : "Update"}
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
