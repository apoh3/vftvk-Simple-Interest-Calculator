/*
    Simple Interest Calculator Script

    Final Project for Introduction to Cloud Development with HTML, CSS, JavaScript - Coursera
*/

//Get inputted values for principal, rate, and years and output inputs and calculations for amount and year.
function compute() {
    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;

    if(validate_value()) {
        interest = principal * years * rate / 100;

        future_year = computer_yr_in_future(years)
    
        document.getElementById("result").innerHTML = "If you deposit <mark>" + Number(principal) + "</mark>,<br/>" + 
                "at an interest rate of <mark>" + rate + "</mark>.<br/>" + 
                "You will receive an amount of <mark>" + interest + "</mark>,<br/>" + 
                "in the year <mark>" + future_year + "</mark>" 
    }    
}

//Get today's year and add inputted No. of Years.
function computer_yr_in_future(years) {
    var d = new Date();
    var curr_yr = d.getFullYear();

    return Number(curr_yr) + Number(years);
}

//Update Interest Rate text value to reflect slider value.
function dipslay_slider_value() {
    rate = document.getElementById("rate").value;

    document.getElementById("percent").innerHTML = rate + "%";
}

//Check if the Amount entered is greater than 0.
function validate_value() {
    if(document.getElementById("principal") .value < 1) {
        alert("Enter a positive number")
        document.getElementById("principal") .focus()
        return false
    }

    return true
}
        