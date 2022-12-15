
let today = new Date();


let day = today.getDate();
let month = today.getMonth();
// When using getMonth on a Date object zero indicates the first month of the year
// So I added one to get the actual month
month++
let year = today.getFullYear();


if (day < 10) {
    day = '0' + day;
}

if (month < 10) {
    month = '0' + month;
}

//  The date is formatted according to ISO8601
today = year + "-" + month + "-" + day


const elem = document.getElementById("date");


elem.setAttribute("min", today);



