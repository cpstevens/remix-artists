const formatISODateForTicketmaster = (date: Date) => {
  const isoString = date.toISOString();
  const splitString = isoString.slice(0, isoString.length - 5);
  console.log(splitString);

  return `${splitString}Z`;
};

export const getShowsThisWeekForArtist = async (artistName: string) => {
  const { TICKETMASTER_API_KEY } = process.env;
  const oneWeekInMs = 7 * 24 * 60 * 60 * 1000;
  const startDate = new Date();

  const endDate = new Date(startDate.getTime() + oneWeekInMs);
  const fetchUrl = `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${artistName}&classificationName=music&startDateTime=${formatISODateForTicketmaster(
    startDate
  )}&endDateTime=${formatISODateForTicketmaster(
    endDate
  )}&apikey=${TICKETMASTER_API_KEY}`;

  const response = await fetch(fetchUrl);
  const data = await response.json();
  console.log(data._embedded);
};
