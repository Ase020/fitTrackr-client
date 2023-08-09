import { FitnessCard, FitnessRecord } from "../../components";
import "./fitness.css";

const Fitness = () => {
  return (
    <main className="fitness_container">
      <div className="fitness_header-container">
        <h4 className="fitness_header-title">
          Add & Track your fitness record
        </h4>

        <p className="fitness_header-desc">
          FitTrackr provides a highly convenient and user-friendly platform that
          enables you to establish and monitor your fitness objectives with
          unparalleled ease.
        </p>
      </div>

      <div className="fitness_body-container">
        <FitnessCard />

        <div className="fitness_body-list">
          <FitnessRecord />
        </div>
      </div>
    </main>
  );
};

export default Fitness;
