import { ExerciseCard } from "../../components";
import "./exercises.css";

function Exercises() {
  return (
    <div className="exercises_wrapper">
      <div className="ex_text_wrapper">
        <h1 className="ex_title">Go Hard</h1>
        <p className="ex_des">
          Explore our rich and dense library of exercises available to you to
          help you achieve your fitness goals.
        </p>
      </div>
      <div className="all_ex_wrapper">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
          <ExerciseCard key={i} />
        ))}
      </div>
    </div>
  );
}

export default Exercises;
