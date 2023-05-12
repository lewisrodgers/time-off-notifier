class Event {
  startDateMatches(dateFromNow) {
    return this.start.setHours(0,0,0,0) == dateFromNow.setHours(0,0,0,0)
  }
  toString() {
    return `${this.start.toDateString()} - ${this.description}`
  }
}

class Timeoff extends Event {
	constructor({id, title, description, start}) {
		super()
		this.id = id
		this.title = title
		this.description = description || "Time off"
		this.start = start
	}
}

function calendarEvents(n, options={}) {
  return CalendarApp.getDefaultCalendar()
    .getEvents(new Date(), dateFromNow(n), options)
    .map(e => new Timeoff({
        id: e.getId(),
        title: e.getTitle(),
        description: e.getDescription(),
        start: e.getStartTime()
      }))
    .filter(e => e.startDateMatches(dateFromNow(n)))
}

function sendMail(emails, subject, body) {
  if (body.length == 0) {
    console.log("No notifications today.")
    return
  }

  MailApp.sendEmail({
    bcc: emails,
    subject: subject,
    body: body
  })
}