const SECOND = 1000; // milliseconds
const MINUTE = 60 * SECOND; // 60,000 milliseconds
const HOUR = 60 * MINUTE; // 3,600,000 milliseconds
const DAY = 24 * HOUR; // 86,400,000 milliseconds
const MONTH = 30 * DAY; // 2,592,000,000 milliseconds
const YEAR = 12 * MONTH; // 31,104,000,000 milliseconds

export const timeAgo = (date: Date): string => {
  const now = new Date();
  const milliSeconds = now.getTime() - date.getTime();
  let interval = Math.floor(milliSeconds / YEAR);
  if (interval > 1) {
    return interval + ' giờ trước';
  }

  interval = Math.floor(milliSeconds / MONTH);
  if (interval > 1) {
    return interval + ' tháng trước';
  }
  interval = Math.floor(milliSeconds / DAY);
  if (interval > 1) {
    return interval + ' ngày trước';
  }
  interval = Math.floor(milliSeconds / HOUR);
  if (interval > 1) {
    return interval + ' giờ trước';
  }
  interval = Math.floor(milliSeconds / MINUTE);
  if (interval > 1) {
    return interval + ' phút trước';
  }
  return Math.floor(milliSeconds) + ' giây trước';
};
