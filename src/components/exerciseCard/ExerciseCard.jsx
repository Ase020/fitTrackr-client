/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import "./exercisecard.css";

function ExerciseCard({ exercise }) {
  return (
    <Link to={`/exercises/${exercise.id}`} className="related_exercise-wrapper">
      <img
        src={exercise.image}
        alt={exercise.name}
        className="related_exercise-img_wrapper"
      />
      <div className="related_exercise-name-container">
        <p className="related_exercise-title">{exercise.name}</p>
        <div className="body_part_equipment-container">
          <div className="body_part-wrapper">
            <p className="exercise_body_part-header">
              Body part:{" "}
              <span className="body_part-data">
                {exercise?.body_parts[0]?.name}
              </span>
            </p>
          </div>

          <div className="body_part-wrapper">
            <p className="exercise_body_part-header">
              Equipment:{" "}
              <span className="body_part-data">
                {exercise?.equipments[0]?.name}
              </span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ExerciseCard;
