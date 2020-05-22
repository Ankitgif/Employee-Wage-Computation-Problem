console.log("Welcome to Employee Wage Computation Program");
let IS_FULL_TIME = 1;
let IS_PART_TIME = 2;
let EMP_WAGE_PER_HR = 20;
let MAX_HR_IN_MONTH = 100;
let totalWage = 0;
let NUM_OF_WORKING_DAYS = 20;
let totalEmpHr = 0;
let totalWorkingDays = 0;
let map = new Map();
const getWorkHr = (empCheck) => {
    switch(empCheck){
        case IS_FULL_TIME:
            console.log("Full Time Employee");
            empHr = 8;
            break;
        case IS_PART_TIME:
            console.log("Part Time Employee");
            empHr = 4;
            break;
        default:
            console.log("Employee is Absent");
            empHr = 0;           
    }
    return empHr;
}
const getDailyEmpWage = (empHr) => {
    return empHr * EMP_WAGE_PER_HR;
}
while(totalEmpHr <= MAX_HR_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 3);
    empHr = getWorkHr(empCheck);
    totalEmpHr = totalEmpHr + empHr;
    map.set(totalWorkingDays,getDailyEmpWage(empHr));
}
totalWage = totalEmpHr * EMP_WAGE_PER_HR;
console.log("Total wage of employee :",totalWage);
console.log(map);