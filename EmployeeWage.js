console.log("Welcome to Employee Wage Computation Program");
let isPresent = 1;
let empCheck = Math.floor(Math.random() * 2);
if(isPresent <= empCheck){
    console.log("Present");
    let empWagePerHr = 20;
    let fullDayHr = 8;
    let empWage = empWagePerHr * fullDayHr;
    console.log("Employee Wage :",empWage);
}else{
    console.log("Absent");
    let empWage = 0;
    console.log("Employee Wage :",empWage);
}
