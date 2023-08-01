import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import "./add-exercise.css";

const AddExercise = () => {
  const [name, setName] = useState("");
  const [intensity, setIntensity] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  return (
    <div className="add_exercise-container">
      <h4 className="add_exercise-header">Add an Exercise</h4>

      <form className="add_exercise-input_wrapper">
        <div className="add_exercise_input-container">
          <label className="add_exercise-label">Name</label>
          <input
            type="text"
            className="add_exercise-input"
            placeholder="alternate heel touchers"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="add_exercise_input-container">
          <label className="add_exercise-label">Image</label>
          <input
            type="file"
            className="add_exercise-input img_input"
            placeholder="alternate heel touchers"
            value={image}
            onChange={(e) => setImage(e.target[0].value)}
          />
        </div>

        <div className="add_exercise_input-container">
          <label className="add_exercise-label">Intensity type</label>
          <input
            type="text"
            className="add_exercise-input"
            placeholder="reps"
            value={intensity}
            onChange={(e) => setIntensity(e.target.value)}
          />
        </div>

        <div className="add_exercise_input-container">
          <label className="add_exercise-label">Description</label>
          <ReactQuill
            theme="snow"
            value={description}
            onChange={setDescription}
          />
        </div>

        <button type="submit" className="add_exercise-btn">
          Create
        </button>
      </form>
    </div>
  );
};

export default AddExercise;
