/* eslint-disable react/prop-types */
import { waterBottle, weightPlate } from "../../assets";
import { design } from "../../constants";
import "./clean-design.css";
import Quotes from "./quotes";

const Design = ({ design }) => {
  const { id, title, desc, bgColor } = design;
  return (
    <div className="design_component">
      <p className="design_component-number" style={{ background: bgColor }}>
        {id}
      </p>
      <div className="design_component-desc">
        <h5 className="design_component-desc-header">{title}</h5>
        <p className="design_component-desc-body">{desc}</p>
      </div>
    </div>
  );
};

const CleanDesign = () => {
  return (
    <section className="clean_design-container">
      <div className="clean_design-intro">
        <div className="clean_design-logo">FitTrackr</div>
        <div className="quotes-container">
          <Quotes />
        </div>
        <div className="clean_design-desc">
          <h3 className="clean_design-header">
            Simple, powerful,
            <br />
            easy-to-use
          </h3>
          <p className="clean_design-body">
            Track your workouts, get better results, and be the best version of
            you. Less thinking, more lifting.
          </p>
        </div>
      </div>

      <div className="clean_design-design">
        <div className="design_desc-wrapper">
          {design.map((design) => (
            <Design key={design.id} design={design} />
          ))}
        </div>
        <div className="design_img-wrapper">
          <img
            src={waterBottle}
            alt="water-bottle"
            className="design_img-water_bottle"
          />
          <img
            src={weightPlate}
            alt="weight-plate"
            className="design_img-weight"
          />
        </div>
      </div>
    </section>
  );
};

export default CleanDesign;
