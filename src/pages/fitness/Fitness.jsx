import "./fitness.css";

const Fitness = () => {
  return (
    <main className="fitness_container">
      <div className="fitness_header-container">
        <h4 className="fitness_header-title">
          Add & Track your fitness record
        </h4>

        <p className="fitness_header-desc">Keep</p>
      </div>

      <div className="fitness_body-container">
        <div className="fitness_body-form">Form</div>
        <div className="fitness_body-list">List</div>
      </div>
    </main>
  );
};

export default Fitness;
