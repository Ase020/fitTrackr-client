import ProgressCircle from "../progress-circle/ProgressCircle";
import "./workoutCard.css";

const WorkoutCard = () => {
  return (
    <div className="workout_card">
      <div className="workout_name-container">
        <p className="card_workout_name">Workout name</p>
        <small className="card_exercise_name">exercise name</small>
      </div>

      <span className="workout_card_date">01-08-2023</span>

      <div className="workout_progress-container">
        <ProgressCircle />
        <small className="workout_progress-percentage">89%</small>
      </div>
    </div>
  );
};

export default WorkoutCard;
