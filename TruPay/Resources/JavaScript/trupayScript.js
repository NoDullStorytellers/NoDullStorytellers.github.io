// BUTTON
const calc = document.getElementById("calculateresult");

// CALCULATE 
function calculateTruPay() {
    // HTML FORM INPUTS
    totalPay = document.getElementById("totalPay").value;
    timeWorked = document.getElementById("timeWorked").value;
    mileage = document.getElementById("mileage").value;
    carMPG = document.getElementById("carMPG").value;
    gasPrice = document.getElementById("gasPrice").value;
    //CALCULATED VARS
    grossHourly = totalPay / timeWorked;
    costPerMile = ((gasPrice / carMPG) * mileage) / timeWorked;
    moneyMade = grossHourly - costPerMile;
    netPay = moneyMade * timeWorked;
    hourlyMileage = mileage / timeWorked;
    // FIXED DECIMAL PLACEMENT
    this.grossHourly = grossHourly.toFixed(2);
    this.costPerMile = costPerMile.toFixed(2);
    this.moneyMade = moneyMade.toFixed(2);
    this.netPay = netPay.toFixed(2);
    this.hourlyMileage = hourlyMileage.toFixed(2);

    return grossHourly, costPerMile, moneyMade, netPay, hourlyMileage;
    
}

// HIDE CONTAINER
let answers = document.getElementById("answerContainer");
document.getElementById("answerContainer").style.display = "none";
// SHOW AND CALCULATE EVENT
calc.addEventListener("click", function getResults() {
    document.getElementById("answerContainer").style.display = "block";
    calculateTruPay();
    document.getElementById("grosshourly").innerHTML = grossHourly;
    document.getElementById("costpermile").innerHTML = costPerMile;
    document.getElementById("moneymade").innerHTML = moneyMade;
    document.getElementById("aftergasamount").innerHTML = netPay;
    document.getElementById("hourlymileage").innerHTML = hourlyMileage;
});