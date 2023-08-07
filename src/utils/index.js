const today = new Date();

const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");

export const formattedDate = `${year}-${month}-${day}`;

function formatDate(dateString) {
  const dateObj = new Date(dateString);
  const day = dateObj.getUTCDate();
  const month = dateObj.getUTCMonth() + 1; // Months are zero-based, so add 1 to get the correct month
  const year = dateObj.getUTCFullYear();

  // Pad single-digit day and month with leading zeros if needed
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
      percentage: percentage,
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
