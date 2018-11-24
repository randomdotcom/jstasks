////////////////// Current Date
var curDate = new Date();
var curDay = curDate.getDate();
var curMonth = curDate.getMonth();
var curYear = curDate.getFullYear();



////////// Calendar
var body = document.getElementsByTagName("body")[0];

var container = document.createElement("div");
container.classList.add("container");
body.appendChild(container);

var main = document.createElement("div");
main.classList.add("main");
container.appendChild(main);


////////////CurrentDateBlock
var curDateBlock = document.createElement("div");
curDateBlock.classList.add("curDateBlock");
main.appendChild(curDateBlock);

var curDateText = document.createElement("p");
curDateBlock.appendChild(curDateText);
curDateText.innerText = curDay + "." + curMonth + "." + curYear;


////////// MonthPicker
var month = curMonth;
var year = curYear;

var monthPickerBlock = document.createElement("div");
main.appendChild(monthPickerBlock);
monthPickerBlock.classList.add("monthPickerBlock");

var prevMonthBlock = document.createElement("div");
monthPickerBlock.appendChild(prevMonthBlock);
prevMonthBlock.addEventListener("click", prevMonth);
prevMonthBlock.classList.add("arrow");

var prevMonthArrow = document.createElement("i");
prevMonthBlock.appendChild(prevMonthArrow);
prevMonthArrow.classList.add("prev-arrow");
prevMonthArrow.classList.add("fa");
prevMonthArrow.classList.add("fa-chevron-left");


var pickedMonth = document.createElement("p");
monthPickerBlock.appendChild(pickedMonth);
pickedMonth.innerText = getTextMonth(month)+" "+year;
pickedMonth.classList.add("pickedMonth");

var nextMonthBlock = document.createElement("div");
monthPickerBlock.appendChild(nextMonthBlock);
nextMonthBlock.addEventListener("click", nextMonth);
nextMonthBlock.classList.add("arrow");

var nextMonthArrow = document.createElement("i");
nextMonthBlock.appendChild(nextMonthArrow);
nextMonthArrow.classList.add("next-arrow");
nextMonthArrow.classList.add("fa");
nextMonthArrow.classList.add("fa-chevron-right");

///////////// Days of week list

var weekDaysBlock = document.createElement("div");
main.appendChild(weekDaysBlock);
weekDaysBlock.classList.add("weekDaysBlock");

for (var i = 0; i < 7; i++) {
    let dayBlock = document.createElement("div");
    weekDaysBlock.appendChild(dayBlock);
    dayBlock.classList.add("dayBlock");
    let day = "";
    switch (i) {
        case 0: day="Monday" 
                break;
        case 1: day = "Tuesday"
            break;
        case 2: day = "Wednesday"
            break;
        case 3: day = "Thursday"
            break;
        case 4: day = "Friday"
            break;
        case 5: day = "Saturday"
            break;
        case 6: day = "Sunday"
            break;
    }

    let dayName = document.createElement("p");
    dayBlock.appendChild(dayName);
    dayName.classList.add("dayName");
    dayName.innerText = day;
}

///////// Numbers
var number = document.getElementsByClassName("number");

var monthsDaysBlock = document.createElement("div");
main.appendChild(monthsDaysBlock);
monthsDaysBlock.classList.add("monthsDaysBlock");

for (var i = 1; i <= 42; i++) {
    let numberBlock = document.createElement("div");
    monthsDaysBlock.appendChild(numberBlock);
    numberBlock.classList.add("numberBlock");

    let number = document.createElement("p");
    numberBlock.appendChild(number);
    number.classList.add("number");

    let d = new Date(year, month, 1);
    d = d.getDay();
    d = (d === 0) ? 7 : d;
    
    if (i-d+1==curDay) { 
        numberBlock.style.backgroundColor = "#3d3d3d";
        numberBlock.style.color = "#a4d337";
        numberBlock.classList.add("today");
    }

    if (i>=d) {
        if (i-d+1 <= daysInMonth(month, year) && i-d+1 >= 1) number.innerText = i-d+1;
    }
}





function nextMonth() {

    if (month == 11) {
        month = 0;
        year += 1;
    } else {
        month += 1;
    }
    pickedMonth.innerText = getTextMonth(month)+" "+year;

    clearMonth();

    
    let todayDayBlock = document.getElementsByClassName("today")[0];
    if (curMonth==month) {
        todayDayBlock.style.backgroundColor = "#3d3d3d";
        todayDayBlock.style.color = "#a4d337";
    } else {
        todayDayBlock.style.backgroundColor = "transparent";
        todayDayBlock.style.color = "black";
    }

    for (var i = 1; i <= 42; i++) {
        let d = new Date(year, month, 1);
        d = d.getDay();
        d = (d === 0) ? 7 : d;

        if (i >= d) {
            if (i - d + 1 <= daysInMonth(month, year) && i - d + 1 >= 1) number[i-1].innerText = i - d + 1;
        } 
    }
    
}

function prevMonth() {
    if (month == 0) {
        month = 11;
        year -= 1;
    } else {
        month -= 1;
    }
    pickedMonth.innerText = getTextMonth(month) + " " + year;


    let todayDayBlock = document.getElementsByClassName("today")[0];
    if (curMonth == month) {
        todayDayBlock.style.backgroundColor = "#3d3d3d";
        todayDayBlock.style.color = "#a4d337";
    } else {
        todayDayBlock.style.backgroundColor = "transparent";
        todayDayBlock.style.color = "black";
    }
    
    clearMonth();


    for (var i = 1; i <= 42; i++) {
        let number = document.getElementsByClassName("number");

        let d = new Date(year, month, 1);
        d = d.getDay();
        d = (d === 0) ? 7 : d;

        if (i >= d) {
            if (i - d + 1 <= daysInMonth(month, year) && i - d + 1 >= 1) number[i-1].innerText = i - d + 1;
        } 
    }
}

function clearMonth() {
  let number = document.getElementsByClassName("number");
  for (var j = 0; j < number.length; j++) {
    number[j].innerText = " ";
  }
}

function getTextMonth(Month) {
    switch (Month) {
        case 0: fMonth = "January"; break;
        case 1: fMonth = "February"; break;
        case 2: fMonth = "March"; break;
        case 3: fMonth = "April"; break;
        case 4: fMonth = "May"; break;
        case 5: fMonth = "June"; break;
        case 6: fMonth = "July"; break;
        case 7: fMonth = "August"; break;
        case 8: fMonth = "September"; break;
        case 9: fMonth = "October"; break;
        case 10: fMonth = "November"; break;
        case 11: fMonth = "December"; break;
    }
    return fMonth;
}

function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
}