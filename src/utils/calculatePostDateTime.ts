export const calculatePostDateTime = (date) => {
  const msDay = 86400000; // Milliseconds in a day
  const msHour = 3600000; // Milliseconds in an hour

  // Difference between Post date and Current date
  const dif = new Date().getTime() - new Date(date).getTime();

  const qtyDays = Math.round(dif / msDay);
  const qtyHour = Math.round(dif / msHour);

  // If it was posted today
  if (qtyDays === 0) {
    return qtyHour === 0 ? 'Agora' : `Há ${qtyHour} hora(s)`;
  } else {
    // Another day
    return qtyDays === 1 ? 'Ontem' : `Há ${qtyDays} dias`;
  }
};
