export const calculatePostDateTime = (date) => {
  const postDate = new Date(date);
  const postHour = postDate.getHours();
  const postDay = postDate.getDate();

  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  const currentDay = currentDate.getDate();

  // to compare the date without considering the time
  const postDateDay = postDate.toLocaleDateString('pt-BR', {
    timeZone: 'America/Sao_Paulo',
  });
  const currentDateDay = currentDate.toLocaleDateString('pt-BR', {
    timeZone: 'America/Sao_Paulo',
  });

  // if it was posted today
  if (postDateDay === currentDateDay) {
    const time = currentHour - postHour;
    const hr = time === 1 ? `hora` : `horas`;
    const msg = time === 0 ? 'Agora' : `Há ${time} ${hr}`;
    return msg;
  } else {
    // another day
    const day = currentDay - postDay;
    const msg = day === 1 ? 'Ontem' : `Há ${day} dias`;
    return msg;
  }
};
