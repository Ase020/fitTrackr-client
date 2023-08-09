/* eslint-disable react/prop-types */
import { useState } from "react";
import "./fitnessCard.css";

const FitnessCard = ({ userId }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const fitnessObj = {
      user_id: userId,
      weight: e.target[0].value,
      waist_size: e.target[1].value,
      height: e.target[2].value,
    };

    console.log(fitnessObj);
    fetch(`http://localhost:3000/users/${userId}/fitnesses`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fitnessObj),
    })
      .then((res) => {
        if (res.ok) {
          return res.json;
        } else {
          throw new Error("Failed to save ");
        }
      })
      .then((data) => {
        alert("Fitness record saved successfully!");
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
    <div className="fitness_body-form">
      <form className="fitness_form-container" onSubmit={handleSubmit}>
        <div className="fitness_input-wrapper">
          <label className="fitness_form-label">Weight</label>
          <input
            type="number"
            placeholder="Weight(kgs)"
            className="fitness_form-input"
            min={30}
            max={250}
            required
          />
        </div>

        <div className="fitness_input-wrapper">
          <label className="fitness_form-label">Waist size</label>
          <input
            type="number"
            placeholder="Waist size(inches)"
            className="fitness_form-input"
            min={16}
            max={60}
            required
          />
        </div>

        <div className="fitness_input-wrapper">
          <label className="fitness_form-label">Height</label>
          <input
            type="number"
            placeholder="Height(cm)"
            className="fitness_form-input"
            min={100}
            max={250}
            required
          />
        </div>

        <button type="submit" className="fitness_form-btn">
          {isLoading ? "Saving..." : "Save"}
        </button>
      </form>
    </div>
  );
};

export default FitnessCard;
