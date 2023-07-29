import { bodyPart, equipment, exerciseDesc, exerciseGif } from "../../assets";
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
              <div className="exercise-detail-desc">
                Smith Machine Smith Machine Smith Machine Smith Machine
              </div>
            </div>

            <div className="exercise-detail-wrapper">
              <div className="exercise-detail-title">
                <img src={bodyPart} alt="equipment" className="title-img" />
                <p className="title-name">Body Part</p>
              </div>
              <div className="exercise-detail-desc">Smith Machine</div>
            </div>

            <div className="exercise-detail-wrapper">
              <div className="exercise-detail-title">
                <img src={exerciseDesc} alt="equipment" className="title-img" />
                <p className="title-name">Description</p>
              </div>
              <div className="exercise-detail-desc">
                Diamond Push-Up The diamond push-up variation targets the
                triceps brachii.6 It is done with your hands close together and
                the index fingers and thumbs of one hand touching the other
                hand, making a diamond shape on the floor. You then do push-ups
                with your hands touching the center of your chest and elbows
                close to your sides during each rep.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseDetails;
