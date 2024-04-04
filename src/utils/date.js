import moment from "moment";
import { monthList } from "utils/Constants";

export const convertTo12HourFormat = (time) => {
  if (time) {
    const momentTime = moment(time, 'HH:mm:ss A');
    const formattedTime = momentTime.format('h:mm A');

    return formattedTime;
  }
};

export const getCurrentYear = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const yyyyMmFormat = `${year}-${month}`;

  return yyyyMmFormat;
};

export function createDate(d) {
  const formattedDate = moment(d).format("DD/MM/YYYY");

  return formattedDate;
}

export const checkAttendance = (checkInTime) => {
  const specifiedTime = "10:00 AM";
  const format = "HH:mm A";
  const checkInMoment = moment(checkInTime, format);
  const specifiedTimeMoment = moment(specifiedTime, format);

  if (checkInMoment.isSameOrBefore(specifiedTimeMoment)) {
    return "On Time";
  } else {
    const lateDuration = moment.duration(checkInMoment.diff(specifiedTimeMoment));

    return "Late by " + durationToHms(lateDuration);
  }
};

export function durationToHms(duration) {
  const hours = duration.hours();
  const minutes = duration.minutes();
  const seconds = duration.seconds();

  const hDisplay = hours > 0 ? hours + (hours === 1 ? " hour, " : " hours, ") : "";
  const mDisplay = minutes > 0 ? minutes + (minutes === 1 ? " minute " : " minutes ") : "";
  const sDisplay = seconds > 0 ? seconds + (seconds === 1 ? " second" : " seconds") : "";

  return hDisplay + mDisplay + sDisplay;
}

export const attendanceStatuscheck = (checkInTime) => {
  let color;
  const specifiedTime = "10:00 AM";
  const format = "HH:mm A";
  const checkInMoment = moment(checkInTime, format);
  const specifiedTimeMoment = moment(specifiedTime, format);

  if (checkInMoment.isSameOrBefore(specifiedTimeMoment)) {
    color = "green";
  } else {
    color = "red";
  }

  return color;
};

export const convertDateFormat = (value, format = "DD MMM YYYY") => {
  if (value) {
    const startDate = moment(value).format(format);

    return startDate;
  }
};

export const changeDateFormate = (value, format = "DD MMM YYYY") => {
  if (value) {
    const startDate = moment(value, "DD/MM/YYYY").format(format);

    return startDate;
  }
};

export const currentTimeInUtc = (format) => {
  const currentTime = moment(new Date()).format(format);

  return currentTime;
};

export const convertToMoment = (convertTime, format) => {

  return moment(convertTime, format);
};

export const timeDifference = (currentTimeMoment, checkInMomentFormat) => {

  return moment.duration(currentTimeMoment.diff(checkInMomentFormat));
};

export const convertUtc = (time, format = 'HH:mm:ss A') => {

  return moment(time).utc().format(format);
};

export const convertByFormat = (time, format) => {

  return moment(time).format(format);
};

export const getTodaysDate =
  new Date().getDate() +
  " " +
  monthList[new Date().getMonth()] +
  ", " +
  new Date().getFullYear();
