import { bodyPart, equipment, exerciseDesc, exerciseGif } from "../../assets";
import "./exercise-details.css";

const RelatedExercise = () => (
  <div className="related_exercise-wrapper">related</div>
);

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

      {/* Exercise target */}
      <div className="exercise_target_set-container">
        <p className="exercise_target-header">Set your target</p>

        <form className="exercise_target-form">
          <label className="set_taget-label">Reps</label>
          <input
            type="number"
            min={0}
            placeholder="reps"
            className="set_target-input"
          />

          <label className="set_taget-label">Duration(minutes)</label>
          <input
            type="number"
            min={0}
            placeholder="10 minutes"
            className="set_target-input"
          />

          <button type="submit" className="set_target-btn">
            Start
          </button>
        </form>
      </div>

      {/* Exercise stats */}
      <div className="exercise_target_set-container">
        <p className="exercise_target-header">How many have you achieved?</p>

        <form className="exercise_target-form">
          <label className="set_taget-label">Reps</label>
          <input
            type="number"
            min={0}
            placeholder="reps"
            className="set_target-input"
          />

          <label className="set_taget-label">Duration(minutes)</label>
          <input
            type="number"
            min={0}
            placeholder="10 minutes"
            className="set_target-input"
          />

          <button type="submit" className="set_target-btn">
            Finish
          </button>
        </form>
      </div>

      {/* related exercises */}
      <div className="related_exercises-container">
        <p className="related_exercises-header">You may also like</p>
        <div className="related_exercises-array">
          <RelatedExercise />
          <RelatedExercise />
          <RelatedExercise />
        </div>
      </div>
    </div>
  );
};

export default ExerciseDetails;
