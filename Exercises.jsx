/* eslint-disable react/prop-types */

function ExerciseCard({
  imageUrl = "https://images.everydayhealth.com/images/strength-training-health-benefits-1440x810.jpg",
  exerciseName = "Pushup",
  target = "Abs",
  bodyPart = "Arms",
}) {
  return (
    <div className="exercise-card">
      <h1>Go Hard</h1>
      <h4>
        Explore our rich and dense library of exerciseavailable to you to help
        you achieve your fitness goals
      </h4>
      <img className="exercise-image" src={imageUrl} alt="Exercise" />
      <div className="exercise-name">{exerciseName}</div>
      <div className="exercise-details">
        <p>
          <strong>Target:</strong> {target}
        </p>
        <p>
          <strong>Body Part:</strong> {bodyPart}
        </p>
      </div>
    </div>
  );
}

export default ExerciseCard;
