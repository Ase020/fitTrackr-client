import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// import { Image } from "cloudinary-react";

import "./add-exercise.css";
// import { useNavigate } from "react-router-dom";

const AddExercise = () => {
  const [name, setName] = useState("");
  const [intensity, setIntensity] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  // const [isSaved, setIsSaved] = useState(false);

  // const navigate = useNavigate();

  const handleChange = (e) => {
    e.persist();
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("intensity_type", intensity);
    formData.append("image", image);

    try {
      const res = await fetch("http://127.0.0.1:3000/exercises", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        console.log("exercise saved successfully!");
        setLoading(false);
        // setIsSaved(true);
        // navigate("/exercises");
      } else {
        const data = await res.json();
        setLoading(false);
        console.log("Error: " + data.errors);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div className="add_exercise-container">
      <h4 className="add_exercise-header">Add an Exercise</h4>

      <form className="add_exercise-input_wrapper" onSubmit={handleSubmit}>
        <div className="add_exercise_input-container">
          <label className="add_exercise-label">Name</label>
          <input
            type="text"
            className="add_exercise-input"
            placeholder="alternate heel touchers"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="add_exercise_input-container">
          <label className="add_exercise-label">Image</label>
          <input
            type="file"
            className="add_exercise-input img_input"
            placeholder="alternate heel touchers"
            onChange={handleChange}
            name="image"
            required
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
            required
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
          {loading ? "Creating..." : "Create"}
        </button>
        {loading && <p>Saving...</p>}
      </form>
    </div>
  );
};

export default AddExercise;
