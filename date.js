
let today = new Date();


let day = today.getDate();
let month = today.getMonth();
month++
let year = today.getFullYear();


if (day < 10) {
    day = '0' + day;
}

if (month < 10) {
    month = '0' + month;
}


today = year + "-" + month + "-" + day


const elem = document.getElementById("date");


elem.setAttribute("min", today);



