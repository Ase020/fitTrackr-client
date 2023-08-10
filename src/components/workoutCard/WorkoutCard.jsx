/* eslint-disable react/prop-types */
import ProgressCircle from "../progress-circle/ProgressCircle";
import "./workoutCard.css";

const WorkoutCard = ({ progress, workoutName, date, exerciseName }) => {
  return (
    <div className="workout_card">
      <div className="workout_name-container">
        <p className="card_workout_name">{workoutName}</p>
        <small className="card_exercise_name">{exerciseName}</small>
      </div>

      <span className="workout_card_date">{date}</span>

      <div className="workout_progress-container">
        <ProgressCircle progress={progress} />
        <small className="workout_progress-percentage">
          {progress > 100 ? "+" : ""}
          {progress}%
        </small>
      </div>
    </div>
  );
};

export default WorkoutCard;
