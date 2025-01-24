function generateTimeSlots(startTime: number, endTime: number): Record<string, any[]> {
  const timeSlots: Record<string, any[]> = {};
  let currentTime = startTime;

  while (currentTime <= endTime) {
    const hours = Math.floor(currentTime / 60);
    const minutes = currentTime % 60;
    const timeKey = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
    timeSlots[timeKey] = [];
    currentTime += 30; // increment by 30 minutes
  }

  return timeSlots;
}

const startTime = 0; // 12:00 AM or 00:00
const endTime = 24 * 60; // 12:00 PM or 24:00

export const timeSlots = generateTimeSlots(startTime, endTime);
