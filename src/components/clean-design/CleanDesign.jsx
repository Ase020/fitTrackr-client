import "./clean-design.css";

const Design = () => {
  return (
    <div className="design_component">
      <p className="design_component-number">01</p>
      <div className="design_component-desc">
        <h5 className="design_component-desc-header">
          Intuitive and clean design
        </h5>
        <p className="design_component-desc-body">
          Track your workouts, get better results, and be the best version of
          you.
        </p>
      </div>
    </div>
  );
};

const CleanDesign = () => {
  return (
    <section className="clean_design-container">
      <div className="clean_design-intro">
        <div className="clean_design-logo">FitTrackr</div>
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
          <Design />
          <Design />
          <Design />
        </div>
        <div className="design_img-wrapper">img wrapper</div>
      </div>
    </section>
  );
};

export default CleanDesign;
