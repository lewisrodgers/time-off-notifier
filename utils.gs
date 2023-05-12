// Datetime

/**
 * Returns the date in number of `days` from today.
 * Usage: daysFromNow(new Date("2023-05-09T15:32:40.568Z")) // 6
 */
function dateFromNow(days) {
  return new Date(addDaysToDate(new Date(), days))
}

/**
 * Returns the number of days from today until the `date`.
 * Usage: dateFromNow(6) // 2023-05-09T15:35:08.115Z
 */
function daysFromNow(date) {
  return daysBetween(new Date(), date)
}

function addDaysToDate(date, days) {
  return date.setDate(date.getDate() + days)
}

/**
 * Returns the number of days between `start` and `end` dates.
 */
function daysBetween(start, end) {
  return inDays(Math.abs(end - start))
}

/**
 * Returns the conversion to days from milliseconds.
 */
function inDays(ms) {
  return Math.ceil(ms / oneDayInMilliseconds())
}

/**
 * Returns number of milliseconds in a day (1000 seconds * 60 seconds * 60 minutes * 24 hours)
 */
function oneDayInMilliseconds() {
  return 1000 * 60 * 60 * 24
}
