import { exerciseGif } from "../../assets";
import "./exercise-details.css";

const ExerciseDetails = () => {
  return (
    <div className="exercise_details-container">
      <h5 className="exercise_details-title">Smith sprint lunge</h5>

      <div className="exercise_details-body">
        <div className="exercise_details-img_container">
          <img
            src={exerciseGif}
            alt="exercise"
            className="exercise_details-img"
          />

          <button className="exercise_details-btn">Workout</button>
        </div>

        <div className="exercise_details-wrapper">wrapper</div>
      </div>
    </div>
  );
};

export default ExerciseDetails;
