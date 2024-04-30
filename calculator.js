let userinput = document.getElementById("date");
input.max = new Date().toISOString().split("T")[0];

function calculate1() {
    let age = getElementById("age");
    let date = new Date(input.value);
    let day1 = date.getDate();
    let month1 = date.getMonth() + 1;
    let year1 = date.getFullYear();
    let now = new Date();
    let day2 = date.getDate();
    let month2 = date.getMonth() + 1;
    let year2 = date.getFullYear();

    let year3;
    let month3;
    let day3;
    year3 = year2 - year1;
    month3 = month2 - month1;
    day3 = day2 - day1;
    if (month3 <= 0) {
        month3 += 12;
        year3--;
    }
    if (day3 < 0) {
        month3--;
        if (month3 <= 0) {
            month3 += 12;
            year3--;
        }
        if (month3 == 2)
            day3 += 28;
        else if (month3 == 4 || month3 == 6 ||month3 == 9 ||month3 == 11)
            day3 += 30;
        else
            day3 += 31;
    }
    let leap = year3/4;
    day3 += leap;
    age.innerHTML = "You are now ${year3} years, ${month3} months, ${day3} days old!";
}