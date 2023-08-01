/* eslint-disable react/prop-types */
const ProgressCircle = ({ progress }) => {
  const size = 24;
  const angle = (progress / 100) * 360;
  return (
    <div
      style={{
        background: `radial-gradient(#0e3848 55%, transparent 56%),
    conic-gradient(transparent 0deg ${angle}deg, #3e4396 ${angle}deg 360deg),
    #4cceac`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default ProgressCircle;
