




const getCalendar = async (req, res) => {
  //current date with default Date() object
  const currentDate = new Date();
  //define the Date object with the current year .getFullYear(), the current month .getMonth, and set the date as 1. 
  const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  //define the end of the month by setting the day of the following month to 0. Interesting technique. 
  const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

  // Get all events for the current month
  const events = await Event.find({
    date: { $gte: startOfMonth, $lte: endOfMonth }
  });

  // Generate the calendar
  const daysInMonth = [];
  let day = new Date(startOfMonth);
  // Move to the first day of the week
  day.setDate(day.getDate() - day.getDay());

  while (day <= endOfMonth) {
    daysInMonth.push({
      date: new Date(day),
      events: events.filter(event => event.date.toDateString() === day.toDateString())
    });
    day.setDate(day.getDate() + 1);
  }

  res.render('calendar', { daysInMonth });
};
