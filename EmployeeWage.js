/**
 * 
 * @author     : Ankit Kumar
 * @Date       : 22/05/2020
 * @Purpose    : Employee Wage Computation Problem
 * @Description: Check Employee is Present or Absent, and part time or full time employee. According to the parameter calculate
 *               and store daily wages and total wages.
 * @Parameter   : IS_FULL_TIME, IS_PART_TIME, EMP_WAGE_PER_HR, MAX_HR_IN_MONTH, NUM_OF_WORKING_DAYS
 * @Return      : totalWage, totalEmpHr, totalWorkingDays, dailyWage                
 *             
 *             
 *                         
 **/
console.log("Welcome to Employee Wage Computation Program");
//Constants
const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const EMP_WAGE_PER_HR = 20;
const MAX_HR_IN_MONTH = 100;
const NUM_OF_WORKING_DAYS = 20;
//Variables
let totalWage = 0;
let totalEmpHr = 0;
let totalWorkingDays = 0;
let dailyWage = new Map();               // Initializing map

const getWorkHr = (empCheck) => {
    switch(empCheck){                           //Check employee is full time or part time employee
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
    return empHr * EMP_WAGE_PER_HR;             //return daily employee wage
}
while(totalEmpHr <= MAX_HR_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;                                                             //incrementing working days 
    let empCheck = Math.floor(Math.random() * 3);
    empHr = getWorkHr(empCheck);
    totalEmpHr = totalEmpHr + empHr;                                                //calculate total employee hour
    dailyWage.set(totalWorkingDays,getDailyEmpWage(empHr));                               //store days and daily employee wage in map
}
totalWage = totalEmpHr * EMP_WAGE_PER_HR;                                           //calculate total wage of employee
console.log("Total wage of employee :",totalWage);
console.log("Day and Daily Wage :",dailyWage);