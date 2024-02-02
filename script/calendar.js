"use strict";
//makes a variable with the current date stored and creates a calendar of the month for that date
const today = new Date();
document.getElementById("calendar").innerHTML = createCalendar(today);
//begins a table and pulls information from other functions to make a calendar
function createCalendar(calDate) {
    let calHTML = "<table class='calTable'>";
    calHTML += calLabel(calDate);
    calHTML += calWeekDayRow();
    calHTML += calDays(calDate);
    calHTML += "</table>";
    return calHTML;
}
        //creates a caption stating the current month and year at the top
function calLabel(calDate) {
    const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const thisMonth = calDate.getMonth();
    const thisYear = calDate.getFullYear();
    return "<caption>" + monthName[thisMonth] + " " + thisYear + "</caption>";
}
        //makes a row for each day of the week
function calWeekDayRow() {
    const dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let rowHTML = "<tr>";
    for (let i = 0; i < dayName.length; i++) {
        rowHTML += "<th class='calWeekDays'>" + dayName[i] + "</th>";
    }
    rowHTML += "</tr>";
    return rowHTML;
}
        //sets the number of days in each month accounting for leap years
function lengthMonth(calDate) {
    let dayCount = [31,28,31,30,31,30,31,31,30,31,30,31];
    const thisYear = calDate.getFullYear();
    const thisMonth = calDate.getMonth();
    if (thisYear % 4 === 0) {
        if ((thisYear % 100 != 0) || (thisYear % 400 === 0)) {
            dayCount[1] = 29;
        }
    }
    return dayCount[thisMonth];
}
        //creates a table cell for each day of the current month
function calDays(calDate) {
    let day = new Date(calDate.getFullYear(), calDate.getMonth(), 1);
    let weekDay = day.getDay();
    let codeHTML = "<tr>";
    for (let i = 0; i < weekDay; i++) {
        codeHTML += "<td></td>";
    }
    const totalDays = lengthMonth(calDate);
    const highlightDay = calDate.getDate();
    for (let i = 1; i <= totalDays; i++) {
        day.setDate(i);
        weekDay = day.getDay();
        if (weekDay === 0) codeHTML += "<tr>";
        if (i === highlightDay) {//gives the current date cell an id that we use the change the background color to differentient it
            codeHTML += "<td class='calDates' id='calToday'>" + i + dayEvent[i] + "</td>";
        } else {
            codeHTML += "<td class='calDates'>" + i + dayEvent[i] + "</td>";
        }
        if (weekDay === 6) codeHTML += "</tr>";
    }
    return codeHTML;
}