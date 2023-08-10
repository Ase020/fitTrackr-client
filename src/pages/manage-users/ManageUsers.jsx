import { useEffect, useState } from "react";
import { UserRow } from "../../components";
import "./manage-users.css";

const TableHead = () => (
  <thead className="thead">
    <tr>
      <th>Avatar</th>
      <th>Email</th>
      <th>Username</th>
      <th>Gender</th>
      <th>Age</th>
      <th>BMI</th>
      <th>Health Status</th>
      <th>Admin?</th>
      <th>Date Joined</th>
      <th>Save</th>
    </tr>
  </thead>
);

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then(setUsers)
      .catch((err) => console.log("Error: ", err));
  }, []);

  return (
    <main className="manage_users">
      <h4 className="manage_users-headers">
        Manage app users with a single click
      </h4>

      <div className="manage_user-table">
        <table className="manage_users_table-container">
          <TableHead />

          <tbody className="tbody">
            {users.map((user) => (
              <UserRow key={user.id} user={user} />
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default ManageUsers;
