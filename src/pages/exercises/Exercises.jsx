import { useEffect, useState } from "react";
import { ExerciseCard } from "../../components";
import "./exercises.css";

function Exercises() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/exercises")
      .then((res) => res.json())
      .then(setExercises);
  }, []);

  console.log(exercises);
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
        {exercises.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </div>
    </div>
  );
}

export default Exercises;
