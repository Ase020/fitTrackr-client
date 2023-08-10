/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useParams, useNavigate } from "react-router-dom";
import { bodyPart, equipment, exerciseDesc, exerciseGif } from "../../assets";
import "./exercise-details.css";
import { useContext, useEffect, useState } from "react";
import { Loader } from "../../components";
import { UserContext } from "../../context/user";

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
  const navigate = useNavigate();
  const [workoutProgress, setWorkoutProgress] = useState("before");
  const [loading, setLoading] = useState(false);
  const [workoutName, setWorkoutName] = useState("");
  const [targetReps, setTargetReps] = useState(0);
  const [targetDuration, setTargetDuration] = useState(0);
  const [repsAchieved, setRepsAchieved] = useState(0);
  const [durationAchieved, setDurationAchieved] = useState(0);

  const [exercise, setExercise] = useState({});
  const [user] = useContext(UserContext);

  useEffect(() => {
    fetch(`https://fittrackr-8zow.onrender.com/exercises/${id}`, {
      credentials: "include",
    })
      .then((res) => {
        if (res.ok) {
          res.json().then(setExercise);
        } else {
          navigate("/login");
        }
      })

      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  // console.log(exercise);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", workoutName);
    formData.append("user_id", user?.id);
    formData.append("exercise_id", exercise?.id);
    formData.append("intensity_target", targetReps);
    formData.append("time_target", targetDuration);
    formData.append("intensity_achieved", repsAchieved);
    formData.append("time_taken", durationAchieved);

    try {
      const res = await fetch(
        `https://fittrackr-8zow.onrender.com/users/${user?.id}/workouts`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (res.ok) {
        alert("Workout saved successfully!");
        res.json().then((data) => {
          console.log(data);
        });
        navigate("/exercises");
      } else {
        const data = await res.json();
        console.log("Error1: " + data.errors);
        navigate("/login");
      }
    } catch (error) {
      console.log("Error2: ", error);
    }
  };

  const startExercise = () => {
    const confirmed = confirm("Start exercise?");

    if (confirmed) {
      setLoading(true);
      setTimeout(() => {
        setWorkoutProgress("achieved");
        setLoading(false);
      }, 3000);
    } else {
      setLoading(false);
    }
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
            Start workout
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
          <p>In progress...</p>
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
            <label className="set_taget-label">Name</label>
            <input
              type="text"
              placeholder={exercise?.name}
              className="set_target-input"
              value={workoutName}
              onChange={(e) => setWorkoutName(e.target.value)}
              required
            />

            <label className="set_taget-label">Reps</label>
            <input
              type="number"
              min={0}
              placeholder="reps"
              className="set_target-input"
              value={targetReps}
              onChange={(e) => setTargetReps(e.target.value)}
              required
            />

            <label className="set_taget-label">Duration(minutes)</label>
            <input
              type="number"
              min={0}
              placeholder="10 minutes"
              className="set_target-input"
              value={targetDuration}
              onChange={(e) => setTargetDuration(e.target.value)}
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
            value={repsAchieved}
            onChange={(e) => setRepsAchieved(e.target.value)}
            required
          />

          <label className="set_taget-label">Duration(minutes)</label>
          <input
            type="number"
            min={0}
            placeholder="10 minutes"
            className="set_target-input"
            value={durationAchieved}
            onChange={(e) => setDurationAchieved(e.target.value)}
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
