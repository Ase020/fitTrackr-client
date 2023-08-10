// const today = new Date();

// const year = today.getFullYear();
// const month = String(today.getMonth() + 1).padStart(2, "0");
// const day = String(today.getDate()).padStart(2, "0");

// export const formattedDate = `${year}-${month}-${day}`;
export const columns = [
  {
    field: "id",
    headerName: "ID",
  },
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    cellClassName: "name-column--cell",
  },
  {
    field: "exercise",
    headerName: "Exercise",
    flex: 1,
  },
  {
    field: "target",
    headerName: "Target",
    flex: 0.5,
  },
  {
    field: "achieved",
    headerName: "Achieved",
    flex: 0.5,
  },
  {
    field: "percentage",
    headerName: "Percentage",
    headerAlign: "left",
    align: "left",
    renderCell: (params) => <div>{params.row.percentage}%</div>,
  },
  {
    field: "date",
    headerName: "Date",
    flex: 1,
  },
];

export function formatDate(dateString) {
  const dateObj = new Date(dateString);
  const day = dateObj.getUTCDate();
  const month = dateObj.getUTCMonth() + 1;
  const year = dateObj.getUTCFullYear();

  const formattedDay = day < 10 ? `0${day}` : `${day}`;
  const formattedMonth = month < 10 ? `0${month}` : `${month}`;

  return `${formattedDay}/${formattedMonth}/${year}`;
}

export function convertWorkoutData(data) {
  const convertedData = data.map((item) => {
    const percentage = (item.intensity_achieved / item.intensity_target) * 100;
    const date = formatDate(item.created_at).toString();

    return {
      id: item.id,
      name: item.name,
      exercise: item.exercise?.name,
      target: item.intensity_target,
      achieved: item.intensity_achieved,
      duration: item.time_taken,
      percentage: Math.round(percentage),
      date: date,
    };
  });

  return convertedData;
}

// top workouts
export function topWorkoutFn(data) {
  data.sort((a, b) => b.percentage - a.percentage);

  return data.slice(0, 10);
}

// recent workouts
export function recentWorkoutsFn(data) {
  data.sort((a, b) => new Date(b.date) - new Date(a.date));
  return data.slice(0, 5);
}

// age calculator
export function ageCalculator(dob) {
  const birthDate = new Date(dob);
  const currentDate = new Date();

  const yearsDiff = currentDate.getFullYear() - birthDate.getFullYear();
  const monthsDiff = currentDate.getMonth() - birthDate.getMonth();

  if (
    monthsDiff < 0 ||
    (monthsDiff === 0 && currentDate.getDate() < birthDate.getDate())
  ) {
    return yearsDiff - 1;
  } else {
    return yearsDiff;
  }
}

// bmi calculator
export function bMICalculator(height, weight) {
  const heightM = height / 100;

  const bmi = weight / (heightM * heightM);

  return bmi.toFixed(2);
}

// BMI Interpreter
export function bMIInterpreter(bmi) {
  switch (true) {
    case bmi < 16.0:
      return "Severely Underweight";
    case bmi >= 16.0 && bmi < 17.0:
      return "Underweight";
    case bmi >= 17.0 && bmi < 18.5:
      return "Mildly Underweight";
    case bmi >= 18.5 && bmi < 25.0:
      return "Normal (Healthy Weight)";
    case bmi >= 25.0 && bmi < 30.0:
      return "Overweight";
    case bmi >= 30.0 && bmi < 35.0:
      return "Obese Class I (Moderate)";
    case bmi >= 35.0 && bmi < 40.0:
      return "Obese Class II (Severe)";
    default:
      return "Obese Class III (Very Severe)";
  }
}

// format weight data
export const formatWeightData = (fitness) => {
  const formattedFitnessData = fitness.map((entry) => ({
    x: entry.created_at.substring(0, 10),
    y: entry.weight,
  }));

  const fitnessData = [
    {
      id: "Weight",
      color: "hsl(1, 70%, 50%)",
      data: formattedFitnessData,
    },
  ];

  return fitnessData;
};

// format waist size data
export const formatWaistData = (fitness) => {
  const formattedFitnessData = fitness.map((entry) => ({
    x: entry.created_at.substring(0, 10),
    y: entry.waist_size,
  }));

  const fitnessData = [
    {
      id: "Waist size",
      color: "hsl(1, 70%, 50%)",
      data: formattedFitnessData,
    },
  ];

  return fitnessData;
};

// format BMI data
export const formatBMIData = (fitness) => {
  const formattedFitnessData = fitness.map((entry) => ({
    x: entry.created_at.substring(0, 10),
    y: bMICalculator(entry.height, entry.weight),
  }));

  const fitnessData = [
    {
      id: "Weight",
      color: "hsl(1, 70%, 50%)",
      data: formattedFitnessData,
    },
  ];

  return fitnessData;
};
