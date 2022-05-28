export const getDateTime = (date) => {
  const postDate = new Date(date);

  const day = postDate.toLocaleDateString('pt-BR', {
    timeZone: 'America/Sao_Paulo',
  });

  let hours: number | string;
  hours = postDate.getHours();
  hours < 10 ? (hours = `0${hours}`) : hours;

  let minutes: number | string;
  minutes = postDate.getMinutes();
  minutes < 10 ? (minutes = `0${minutes}`) : minutes;

  return `${day} ${hours}h${minutes}`;
};
