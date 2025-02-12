// //current date with default Date() object
// const currentDate = new Date();
// //define the Date object with the current year .getFullYear(), the current month .getMonth, and set the date as 1.
// const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
// //define the end of the month by setting the day of the following month to 0. Interesting technique.
// const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

// // Get all events for the current month
// const events = await Event.find({
//   date: { $gte: startOfMonth, $lte: endOfMonth }
// });

// // Generate the calendar
// const daysInMonth = [];
// let day = new Date(startOfMonth);
// // Move to the first day of the week
// day.setDate(day.getDate() - day.getDay());

// while (day <= endOfMonth) {
//   daysInMonth.push({
//     date: new Date(day),
//     events: events.filter(event => event.date.toDateString() === day.toDateString())
//   });
//   day.setDate(day.getDate() + 1);
// }





const currentDate = new Date();

const startOfMonth = new Date(
	currentDate.getFullYear(),
	currentDate.getMonth(),
	1
);

const endOfMonth = new Date(
	currentDate.getFullYear(), //year
	currentDate.getMonth() + 1, //month
	0 //day
);

//ignore events for now

const daysInMonth = [];

let day = new Date(startOfMonth);

//move to the first day of the week (sun? possibly in previous month i guess) If day = 0 then it will stay on the same day (sunday)
day.setDate(day.getDate() - day.getDay);

while(day<= endOfMonth) {
  daysInMonth.push({
    date: new Date(day),
    events: 'fill in later'
  })
  day.setDate(day.getDate() + 1)
}

// res.render('calendar', { daysInMonth });

//so now i have an array of all the dates in the month. I just need to render them to ejs and it will be able to put them into the calcendar. lets start there 
//need to start a route probably. lets set up this page only with no auth requirement