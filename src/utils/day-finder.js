export const dayFinder = () => {
  let today = "";
  const now = new Date();
  const local = now.toLocaleDateString();
  const localDate = new Date(local);
  const dayIndex = localDate.getDay();

  switch (dayIndex) {
    case 0:
      today = "Sunday";
      break;

    case 1:
      today = "Monday";
      break;

    case 2:
      today = "Tuesday";
      break;

    case 3:
      today = "Wednesday";
      break;

    case 4:
      today = "Thursday";
      break;

    case 5:
      today = "Friday";
      break;

    case 6:
      today = "Saturday";
      break;

    default:
      today = "Oops, something went wrong!";
      break;
  }

  return today;
};
