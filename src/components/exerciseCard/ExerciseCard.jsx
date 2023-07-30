// import React from 'react'

import { exerciseGif } from '../../assets';
import './exercisecard.css';

function ExerciseCard() {
  return (
    <div className="related_exercise-wrapper">
      <img src={exerciseGif} alt="" className="related_exercise-img_wrapper" />
      <div className="relatd_exercise-name-container">
        <p className="related_exercise-title">45° side bend</p>
        <div className="body_part_equipment-container">
          <div className="body_part-wrapper">
            <p className="exercise_body_part-header">
              Targets: <span className="body_part-data">Waist</span>
            </p>
          </div>

          <div className="body_part-wrapper">
            <p className="exercise_body_part-header">
              Body part: <span className="body_part-data">Waist</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExerciseCard;
