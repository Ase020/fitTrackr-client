const today = new Date();

const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");

export const formattedDate = `${year}-${month}-${day}`;

export function convertWorkoutData(data) {
  const convertedData = data.map((item) => {
    const percentage = (item.intensity_achieved / item.intensity_target) * 100;
    const date = "03/12/2022"; // Replace this with the actual date you want to set

    return {
      id: item.id,
      name: item.name,
      exercise: "exercise " + String.fromCharCode(96 + item.exercise_id), // "a" corresponds to exercise_id 1, "b" to 2, and so on.
      target: item.intensity_target,
      achieved: item.intensity_achieved,
      duration: item.time_taken,
      percentage: percentage,
      date: date,
    };
  });

  return convertedData;
}

//   const newArray = conver(data);
//   console.log(newArray);
