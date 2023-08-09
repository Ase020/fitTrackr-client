import "./fitnessCard.css";

const FitnessCard = () => (
  <div className="fitness_body-form">
    <form className="fitness_form-container">
      <div className="fitness_input-wrapper">
        <label className="fitness_form-label">Weight</label>
        <input
          type="number"
          placeholder="Weight(kgs)"
          className="fitness_form-input"
          min={30}
          max={250}
          required
        />
      </div>

      <div className="fitness_input-wrapper">
        <label className="fitness_form-label">Waist size</label>
        <input
          type="number"
          placeholder="Waist size(inches)"
          className="fitness_form-input"
          min={16}
          max={60}
          required
        />
      </div>

      <div className="fitness_input-wrapper">
        <label className="fitness_form-label">Height</label>
        <input
          type="number"
          placeholder="Height(cm)"
          className="fitness_form-input"
          min={100}
          max={250}
          required
        />
      </div>

      <button type="submit" className="fitness_form-btn">
        Save
      </button>
    </form>
  </div>
);

export default FitnessCard;
