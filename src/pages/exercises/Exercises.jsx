import { useContext } from "react";
import { ExerciseCard, Loader } from "../../components";
import "./exercises.css";
import { ExercisesContext } from "../../context/exercise";

function Exercises() {
  const { exercises, isLoading } = useContext(ExercisesContext);

  return (
    <div className="exercises_wrapper">
      <div className="ex_text_wrapper">
        <h1 className="ex_title">Go Hard</h1>
        <p className="ex_des">
          Explore our rich and dense library of exercises available to you to
          help you achieve your fitness goals.
        </p>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="all_ex_wrapper">
          {exercises.map((exercise) => (
            <ExerciseCard key={exercise.id} exercise={exercise} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Exercises;
