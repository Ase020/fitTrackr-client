import { useParams } from "react-router-dom";
import { bodyPart, equipment, exerciseDesc, exerciseGif } from "../../assets";
import "./exercise-details.css";
import { useEffect, useState } from "react";
import { Loader } from "../../components";

const RelatedExercise = () => (
  <div className="related_exercise-wrapper">
    <img src={exerciseGif} alt="" className="related_exercise-img_wrapper" />
    <div className="relatd_exercise-name-container">
      <p className="related_exercise-title">45° side bend</p>
      <div className="body_part_equipment-container">
        <div className="body_part-wrapper">
          <p className="exercise_body_part-header">
            Body part: <span className="body_part-data">Waist</span>
          </p>
        </div>

        <div className="body_part-wrapper">
          <p className="exercise_body_part-header">
            Equipment: <span className="body_part-data">Leverage machine</span>
          </p>
        </div>
      </div>
    </div>
  </div>
);

const ExerciseDetails = () => {
  const { id } = useParams();
  const [workoutProgress, setWorkoutProgress] = useState("before");
  const [loading, setLoading] = useState(false);

  const [exercise, setExercise] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/exercises/${id}`)
      .then((res) => res.json())
      .then(setExercise);
  }, [id]);

  // console.log(exercise);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const startExercise = () => {
    confirm("Start exercise?");
    setLoading(true);
    setTimeout(() => {
      setWorkoutProgress("achieved");
      setLoading(false);
    }, 3000);
  };

  return (
    <div className="exercise_details-container">
      <h5 className="exercise_details-title">{exercise?.name}</h5>

      <div className="exercise_details-body">
        <div className="exercise_details-img_container">
          <img
            src={exercise?.image}
            alt={exercise?.name}
            className="exercise_details-img"
          />

          <button
            className="exercise_details-btn"
            style={
              workoutProgress === "before"
                ? { display: "inline" }
                : { display: "none" }
            }
            onClick={() => setWorkoutProgress("target")}
          >
            Workout
          </button>
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
                {exercise?.equipments?.length > 0 &&
                  exercise.equipments[0].name}
              </div>
            </div>

            <div className="exercise-detail-wrapper">
              <div className="exercise-detail-title">
                <img src={bodyPart} alt="equipment" className="title-img" />
                <p className="title-name">Body Part</p>
              </div>
              <div className="exercise-detail-desc">
                {exercise?.body_parts?.length > 0 &&
                  exercise.body_parts[0].name}
              </div>
            </div>

            <div className="exercise-detail-wrapper">
              <div className="exercise-detail-title">
                <img src={exerciseDesc} alt="equipment" className="title-img" />
                <p className="title-name">Description</p>
              </div>
              <div className="exercise-detail-desc">
                <div
                  dangerouslySetInnerHTML={{ __html: exercise?.description }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Exercise target */}

      {loading ? (
        <div className="loader_container">
          <Loader />
        </div>
      ) : (
        <div
          className="exercise_target_set-container"
          style={
            workoutProgress === "target"
              ? { display: "inline" }
              : { display: "none" }
          }
        >
          <p className="exercise_target-header">Set your target</p>

          <form
            className="exercise_target-form"
            onSubmit={(e) => {
              e.preventDefault();
              startExercise();
            }}
          >
            <label className="set_taget-label">Reps</label>
            <input
              type="number"
              min={0}
              placeholder="reps"
              className="set_target-input"
              required
            />

            <label className="set_taget-label">Duration(minutes)</label>
            <input
              type="number"
              min={0}
              placeholder="10 minutes"
              className="set_target-input"
              required
            />

            <button type="submit" className="set_target-btn">
              Start
            </button>
          </form>
        </div>
      )}

      {/* Exercise stats */}
      <div
        className="exercise_target_set-container"
        style={
          workoutProgress === "achieved"
            ? { display: "inline" }
            : { display: "none" }
        }
      >
        <p className="exercise_target-header">How many have you achieved?</p>

        <form className="exercise_target-form" onSubmit={handleSubmit}>
          <label className="set_taget-label">Reps</label>
          <input
            type="number"
            min={0}
            placeholder="reps"
            className="set_target-input"
            required
          />

          <label className="set_taget-label">Duration(minutes)</label>
          <input
            type="number"
            min={0}
            placeholder="10 minutes"
            className="set_target-input"
            required
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
