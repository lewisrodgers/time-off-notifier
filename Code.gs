const DAYS_AWAY_FROM_TODAY = [30, 14, 7, 1]

// For more filter options see https://developers.google.com/apps-script/reference/calendar/calendar-app#advanced-parameters_7
const FILTER = {search: "OOO"}

// Set to false when you don't want to send emails.
const MAIL_ENABLED = true

// Your name. Shows up in the email subject line.
const SENDER = "YOUR_NAME"

// The email subject line that your recipients will see in their inbox.
const SUBJECT = `Upcoming time off for ${SENDER}`

// Distribution list. Notifications are sent to the emails listed here.
const RECIPIENTS = []

// The main entry point.
function main() {
  let events = DAYS_AWAY_FROM_TODAY.map(d => calendarEvents(d, FILTER)).flat()

  let body = events.map(e => e.toString()).reverse().join("\n")

  if (MAIL_ENABLED) {
    sendMail(RECIPIENTS.join(", "), SUBJECT, body)
  }

  // For peeking at the resulting events
  console.log(events)
}