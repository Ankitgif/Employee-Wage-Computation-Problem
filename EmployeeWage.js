console.log("Welcome to Employee Wage Computation Program");
let isFullTime = 1;
let isPartTime = 2;
let EMP_WAGE_PER_HR = 20;
let totalWage = 0;
let noOfWorkingDays = 20;
for(let day = 1; day <= noOfWorkingDays; day++){
    let empCheck = Math.floor(Math.random() * 3);
    switch(empCheck){
        case isFullTime:
            console.log("Full Time Employee");
            empHr = 8;
            break;
        case isPartTime:
            console.log("Part Time Employee");
            empHr = 4;
            break;
        default:
            console.log("Employee is Absent");
            empHr = 0;           
        }
    let empWage = EMP_WAGE_PER_HR * empHr;
    console.log("Employee Wage :",empWage);
    totalWage = totalWage + empWage;
    console.log("Total Wage of Employee :",totalWage);
}
