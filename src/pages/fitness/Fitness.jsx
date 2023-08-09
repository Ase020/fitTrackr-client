/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { FitnessCard, FitnessRecord } from "../../components";
import "./fitness.css";
import { UserContext } from "../../context/user";

const TableHead = () => (
  <thead className="thead fitness_thead">
    <tr className="fitness_tr">
      <th className="fitness_th">ID</th>
      <th className="fitness_th">Weight</th>
      <th className="fitness_th">Waist size</th>
      <th className="fitness_th">Height</th>
      <th className="fitness_th">BMI</th>
      <th className="fitness_th">Health Status</th>
      <th className="fitness_th">Date</th>
    </tr>
  </thead>
);

const Fitness = () => {
  const [user] = useContext(UserContext);
  const [fitnesses, setFitnesses] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/users/${user?.id}/fitnesses`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Failed to fetch fitnesses!");
        }
      })
      .then((data) => {
        setFitnesses(data);
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  console.log(fitnesses);

  return (
    <main className="fitness_container">
      <div className="fitness_header-container">
        <h4 className="fitness_header-title">
          Add & Track your fitness record
        </h4>

        <p className="fitness_header-desc">
          FitTrackr provides a highly convenient and user-friendly platform that
          enables you to establish and monitor your fitness objectives with
          unparalleled ease.
        </p>
      </div>

      <div className="fitness_body-container">
        <FitnessCard userId={user?.id} fitnesses={fitnesses} />

        <div className="fitness_body-list">
          {fitnesses.length > 0 ? (
            <table className="manage_users_table-container">
              <TableHead />

              <tbody className="fitness_tbody">
                {fitnesses.map((fitness) => (
                  <FitnessRecord key={fitness.key} fitness={fitness} />
                ))}
              </tbody>
            </table>
          ) : (
            <p className="no_user_data">No user fitness data</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default Fitness;
