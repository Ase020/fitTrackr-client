/* eslint-disable react/prop-types */
import { bMICalculator, bMIInterpreter, formatDate } from "../../utils";
import "./fitnessRecord.css";

const FitnessRecord = ({ fitness }) => {
  const bmi = bMICalculator(fitness.height, fitness.weight);
  const healthStatus = bMIInterpreter(bmi);
  const date = formatDate(fitness.created_at);
  return (
    <>
      <tr className="fitness_record-tr">
        <td className="fitness_record-td">{fitness.id}</td>
        <td className="fitness_record-td">{fitness.weight}</td>
        <td className="fitness_record-td">{fitness.waist_size}</td>
        <td className="fitness_record-td">{fitness.height}</td>
        <td className="fitness_record-td">{bmi}</td>
        <td className="fitness_record-td">{healthStatus}</td>
        <td className="fitness_record-td">{date}</td>
      </tr>
    </>
  );
};

export default FitnessRecord;
