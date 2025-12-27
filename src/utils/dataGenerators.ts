export const generateRandomBid = (): string => {
  const bid = (Math.random() * (5 - 0.5) + 0.5).toFixed(2);
  return bid;
};

export const generateRandomEndTime = (): string => {
  const now = new Date();
  const hoursToAdd = Math.floor(Math.random() * 24) + 1;
  const minutesToAdd = Math.floor(Math.random() * 60);
  const secondsToAdd = Math.floor(Math.random() * 60);

  const futureDate = new Date(
    now.getTime() +
    hoursToAdd * 60 * 60 * 1000 +
    minutesToAdd * 60 * 1000 +
    secondsToAdd * 1000
  );

  return futureDate.toISOString(); 
};