import ProgressCircle from "../progress-circle/ProgressCircle";
import "./workoutCard.css";

const WorkoutCard = () => {
  return (
    <div className="workout_card">
      <div className="workout_name-container">
        <p className="workout_name">Workout name</p>
        <small className="workout_name">Exercise name</small>
      </div>

      <span className="workout_date">01-08-2023</span>

      <div className="workout_progress-container">
        <ProgressCircle />
        <small className="workout_progress-percentage">89%</small>
      </div>
    </div>
  );
};

export default WorkoutCard;
