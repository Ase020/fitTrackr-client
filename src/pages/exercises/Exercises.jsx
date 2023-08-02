import { useEffect, useState } from "react";
import { ExerciseCard, Loader } from "../../components";
import "./exercises.css";

function Exercises() {
  const [exercises, setExercises] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://127.0.0.1:3000/exercises")
      .then((res) => res.json())
      .then((data) => {
        setExercises(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

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
