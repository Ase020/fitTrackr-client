/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  ageCalculator,
  bMICalculator,
  bMIInterpreter,
  formatDate,
} from "../../utils";
import "./user-row.css";

const UserRow = ({ user }) => {
  const [checked, setChecked] = useState(user?.is_admin);

  const bmi = bMICalculator(user.height, user.weight);
  const healthStatus = bMIInterpreter(bmi);
  const age = ageCalculator(user.dob);
  const joinedDate = formatDate(user.created_at);

  const handleEdit = (e) => {
    e.preventDefault();
    console.log("Clicked:", checked);
  };

  return (
    <tr>
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
        <button className="td_save-btn" onClick={handleEdit}>
          Save
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
