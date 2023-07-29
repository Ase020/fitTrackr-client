import { bodyPart, equipment, exerciseGif } from "../../assets";
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

        <div className="exercise_details-wrapper">
          <h6 className="exercise_details-header">Exercise Details</h6>

          <div className="exercise_details-section">
            <div className="exercise-detail-wrapper">
              <div className="exercise-detail-title">
                <img src={equipment} alt="equipment" className="title-img" />
                <p className="title-name">Equipment</p>
              </div>
              <div className="exercise-detail-title">
                Smith Machine Smith Machine
              </div>
            </div>

            <div className="exercise-detail-wrapper">
              <div className="exercise-detail-title">
                <img src={bodyPart} alt="equipment" className="title-img" />
                <p className="title-name">Equipment</p>
              </div>
              <div className="exercise-detail-title">Smith Machine</div>
            </div>

            <div className="exercise-detail-wrapper">
              <div className="exercise-detail-title">
                <img src={equipment} alt="equipment" className="title-img" />
                <p className="title-name">Equipment</p>
              </div>
              <div className="exercise-detail-title">Smith Machine</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseDetails;
