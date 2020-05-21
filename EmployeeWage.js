console.log("Welcome to Employee Wage Computation Program");
let isPresent = 1;
let isPartTime = 2;
let EMP_WAGE_PER_HR = 20;
let empCheck = Math.floor(Math.random() * 3);
if(isPresent == empCheck){
    console.log("Present");
    let fullDayHr = 8;
    let empWage = EMP_WAGE_PER_HR * fullDayHr;
    console.log("Employee Wage :",empWage);
}else if(isPartTime == empCheck){
    console.log("Part Time Employee");
    let partTimeHr = 4;
    let empWage = partTimeHr * EMP_WAGE_PER_HR;
    console.log("Employee Wage of Part Time Employee :",empWage);
}else{
    console.log("Absent");
    let empWage = 0;
    console.log("Employee Wage :",empWage);
}