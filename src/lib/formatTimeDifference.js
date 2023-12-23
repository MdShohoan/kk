
import moment from "moment";
import toBengaliDigits from "./toBanglaDigits";

function formatTimeDifference(timestamp) {
  const now = moment();
  const targetTime = moment(timestamp);
  const duration = moment.duration(now.diff(targetTime));

  const days = duration.days();
  const hours = duration.hours();
  const minutes = duration.minutes();
  const seconds = duration.seconds();

  let result = "";

  if (days > 0) {
    result += `${toBengaliDigits(days)} দিন`;
  }

  if (hours > 0) {
    result += `${result ? ", " : ""}${toBengaliDigits(hours)} ঘন্টা`;
  }

  if (minutes > 0) {
    result += `${result ? ", " : ""}${toBengaliDigits(minutes)} মিনিট`;
  }

  if (seconds > 0 || result === "") {
    result += `${result ? ", " : ""}${toBengaliDigits(seconds)} সেকেন্ড`;
  }

  return result
}

export default formatTimeDifference
