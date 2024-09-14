export const monthNames: Map<number, string> = new Map([
  [1, "January"],
  [2, "February"],
  [3, "March"],
  [4, "April"],
  [5, "May"],
  [6, "June"],
  [7, "July"],
  [8, "August"],
  [9, "September"],
  [10, "October"],
  [11, "November"],
  [12, "December"],
]);

export const monthNamesV3: Map<number, string> = new Map([
  [1, "Jan"],
  [2, "Feb"],
  [3, "Mar"],
  [4, "Apr"],
  [5, "May"],
  [6, "June"],
  [7, "July"],
  [8, "Aug"],
  [9, "Sep"],
  [10, "Oct"],
  [11, "Nov"],
  [12, "Dec"],
]);

export const monthNamesV2: Map<string, string> = new Map([
  ["01", "January"],
  ["02", "February"],
  ["03", "March"],
  ["04", "April"],
  ["05", "May"],
  ["06", "June"],
  ["07", "July"],
  ["08", "August"],
  ["09", "September"],
  ["10", "October"],
  ["11", "November"],
  ["12", "December"],
]);

export const monthNamesV4: Map<string, string> = new Map([
  ["1", "Jan"],
  ["2", "Feb"],
  ["3", "Mar"],
  ["4", "Apr"],
  ["5", "May"],
  ["6", "June"],
  ["7", "July"],
  ["8", "Aug"],
  ["9", "Sep"],
  ["10", "Oct"],
  ["11", "Nov"],
  ["12", "Dec"],
]);

export function getTodayDate(): string {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;
  return `${year}-${formattedMonth}-${formattedDay}`;
}

export function getDateFromnumber(
  _year: number,
  _month: number,
  _day: number
): string {
  const formattedDay = _day < 10 ? `0${_day}` : _day;
  const formattedMonth = _month < 10 ? `0${_month}` : _month;
  return `${_year}-${formattedMonth}-${formattedDay}`;
}

export function getDateFromnumberV2(year: number, month: number, day: number) {
  const formattedDay = day < 10 ? `0${day}` : day;
  return `${formattedDay} ${monthNamesV3.get(month)} ${year}`;
}

export function getDateFromTimestampV2(timestamp: any): string {
  if (!timestamp) return "";
  const date = timestamp.toDate();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const formattedMonth = month < 10 ? `0${month}` : month;
  const formattedDay = day < 10 ? `0${day}` : day;
  return `${year}-${formattedMonth}-${formattedDay}`;
}

export function getDateFromTimestamp(timestamp: any): string {
  if (!timestamp) return "";
  const date = timestamp.toDate();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const formattedDay = day < 10 ? `0${day}` : day;
  return `${formattedDay} ${monthNames.get(month)} ${year}`;
}

export function getDayFromTimestamp(timestamp: any) {
  if (!timestamp) return "1";
  const date = timestamp.toDate();
  const day = date.getDate();
  const formattedDay = day < 10 ? `0${day}` : day;
  return formattedDay;
}

export function getDayOfWeekFromTimestamp(timestamp: any): string {
  if (!timestamp) return "";
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const date = timestamp.toDate();
  const dayOfWeek = date.getDay();
  return daysOfWeek[dayOfWeek];
}

export function getDayOfWeek() {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const date = new Date();
  const dayOfWeek = date.getDay();
  return daysOfWeek[dayOfWeek];
}

export function getFullDDateFromTimestamp(timestamp: any): string {
  if (!timestamp) return "";
  const date = timestamp.toDate();

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const formattedDay = day < 10 ? `0${day}` : day;
  const dateString = `${formattedDay} ${monthNames.get(month)} ${year}`;

  const hour = date.getHours();
  const minutes = date.getMinutes();
  const formattedHour = hour < 10 ? `0${hour}` : hour;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timeString = `${formattedHour}:${formattedMinutes}`;

  return (
    timeString + " " + getDayOfWeekFromTimestamp(timestamp) + ", " + dateString
  );
}
